import { Component, OnInit } from '@angular/core';
import { Employee } from 'projects/c-grate-common/src/lib/cGrateModels/BusinessModels/Employee';
import { CGrateAuthService } from 'projects/c-grate-common/src/lib/cGrateServices/c-grate-auth.service';
import { AppError } from 'projects/c-grate-common/src/lib/cGrateModels/Common/app-error';
import { NotFoundError } from 'projects/c-grate-common/src/lib/cGrateModels/Common/not-found-error';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { NotAuthorized } from 'projects/c-grate-common/src/lib/cGrateModels/Common/Not-Authorized';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css','./main.css','./util.css','./hamburgers.min.css','./select2.min.css']
})
export class CLoginComponent implements OnInit {
  username:string;
  password:string;
  loading:boolean=false;
  validUser:boolean=true;
  backendError:boolean=false;
  employeeLogin:Employee;
  errorMsg:string = "You are not connected";
  constructor(private authService:CGrateAuthService,private router:Router) { }

  ngOnInit() {
  }
  //Method that check if user is valid and logs the user in if true
  onLogIn()
  {
    var cridentials = {username:this.username,password:this.password};
    console.log(this.username + "is username");
    if(!this.username||!this.password)
    {
      this.backendError = true;
      this.errorMsg = "Please complete all the fields";
      return;
    }
    this.loading=true;
    this.authService.Post(cridentials).subscribe(result=>{
      this.router.navigate(['/employees']);
     },(error)=>{// Error Handling
     
         if(error instanceof NotAuthorized){
          this.backendError=true;
         this.errorMsg = "Username or Password is not Correct";
        }
         else{
          this.backendError=true;
          this.errorMsg = "Error Logging you in, confirm cridentials and retry";
         }
     })
  }
}
