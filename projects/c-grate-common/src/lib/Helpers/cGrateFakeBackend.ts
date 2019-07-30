import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Employee } from '../cGrateModels/BusinessModels/Employee';
import { EGenders } from '../cGrateModels/Enums/GenderEnum';
import { IPerson } from '../cGrateModels/Interfaces/IPerson';
import { NotAuthorized } from '../cGrateModels/Common/Not-Authorized';

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class cGrateFakeBackend implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) 
            .pipe(delay(1500))//Some delay to make it look real and stuff
            .pipe(dematerialize());

        function handleRoute() {
            console.log("Intercepted Route Handling Request now url is "+url);
            switch (true) {                
                case url.endsWith('/auth') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                    case url.match(/\/employees\/\d+$/) && method === 'PUT':
                        return UpdateUser();
                case url.match(/\/employees\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                case url.endsWith('/employees') && method === 'GET':
                    return getEmployees();
                case url.endsWith('/employees') && method === 'POST':
                        return PostEmp(body);
                case url.endsWith('/GetUser') && method === 'GET':
                        return GetUserByID(url);
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions
        function GetUserByID(url)
        {
                console.log('Requested to get User By Id'+url);
                var EmployeeList = JSON.parse(localStorage.getItem("Employees")) as Employee[];
            var id =idFromUrl();
            console.log("ID from URL result "+id);
                return ok(EmployeeList.find(x=>x.id == id));
        }

function PostEmp(body)
{
    console.log("Body is "+JSON.stringify(body));
    var EmployeeList = JSON.parse(localStorage.getItem("Employees")) as Employee[];
    var newEmp= body as Employee;
    EmployeeList.push(newEmp);
    saveUsersToLocalStorage(EmployeeList);
return ok();
}


       

        function authenticate() {
            const { username, password } = body;
            console.log(JSON.stringify(body));
            console.log('Recieved Logon Request' +username + password);
            
            if (username!='admin'|| password!='admin')return unauthorized();
            console.log("Username and Password is correct");
            localStorage.setItem("loggedInUser",body);
            return ok({
                
                firstName: "cGrate Admin",
                lastName: "cGrate Admin",
                token: 'ThisIsJustAFakeTokenYOLO'
            })
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }

        function getEmployees() {//Gets all the employees from the local storage
            console.log("Retrievig data from local storage using mock back end");            
            var EmployeeList = JSON.parse(localStorage.getItem("Employees"));
            if(EmployeeList==null)
            {
                console.log("There is no users yet, just adding some so that the output does not look horse s@##");            
                let emp1= new Employee();
                emp1.name = "Daniel";
                emp1.surname = "Terblanche";
                emp1.dateOfBirth = "1922/09/09";
                emp1.gender = EGenders.other;
                emp1.notes = "This is a cool guy";
                emp1.email = "danielterblanche2@gmail.com";
                emp1.id="9609095032081";
                ///
                let emp2= new Employee();
                emp2.name = "Kelvin";
                emp2.surname = "Chikomo";
                emp2.dateOfBirth = "1985/09/09";
                emp2.gender = EGenders.male;
                emp2.notes = "Passionate";
                emp2.email = "notsure@gmail.com";
                emp2.id="9609095032082";
                ///
                let emp3= new Employee();
                emp3.name = "Daniel";
                emp3.surname = "Manyemwe";
                emp3.dateOfBirth = "1985/09/09";
                emp3.gender = EGenders.male;
                emp3.notes = "Likes programming Riddles";
                emp3.email = "notsure@gmail.com";
                emp3.id="9609095032083";
                //
                let emp4= new Employee();
                emp4.name = "Janine";
                emp4.surname = "Cambell";
                emp4.dateOfBirth = "1990/09/09";
                emp4.gender = EGenders.female;
                emp4.notes = "Added a girl so I dont look sexist";
                emp4.email = "notsure@gmail.com";
                emp4.id="9609095032084";
            let DummyUsers:IPerson[]=[emp1,emp2,emp3,emp4];
            saveUsersToLocalStorage(DummyUsers);
            return ok(DummyUsers);
                
            }
            return ok(EmployeeList);
        }

        function saveUsersToLocalStorage(users:IPerson[])
        {
            console.log("Saving some default users");
                localStorage.setItem("Employees",JSON.stringify(users));
        } 

       

        function deleteUser() {
            console.log('Preparing to Delete users');
            var EmployeeList = JSON.parse(localStorage.getItem("Employees")) as Employee[];
            let id = idFromUrlist();
            var newEmpList = EmployeeList.filter(x=>x.id!=id);
            saveUsersToLocalStorage(newEmpList);
            console.log('User Deleted');
            return ok();
        }
        function UpdateUser()
        {
            var EmployeeList = JSON.parse(localStorage.getItem("Employees")) as Employee[];
            var newEmp= body as Employee;
            var newEmpList = EmployeeList.filter(x=>x.id!= newEmp.id);
            newEmpList.push(newEmp);
            saveUsersToLocalStorage(newEmpList);
                    return ok();
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function unauthorized() {
            
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return urlParts[urlParts.length - 2];
        }
        function idFromUrlist() {
            const urlParts = url.split('/');
            return urlParts[urlParts.length - 1];
        }
    }
}

export const CGrateFakeBackend = {
    // use fake backend in place of Http service becuase we dont have a back end and stuff
    provide: HTTP_INTERCEPTORS,
    useClass: cGrateFakeBackend,
    multi: true
};