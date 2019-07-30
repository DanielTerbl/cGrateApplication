import { Component, OnInit } from '@angular/core';
import { Employee } from 'projects/c-grate-common/src/lib/cGrateModels/BusinessModels/Employee';
import { IPerson } from 'projects/c-grate-common/src/lib/cGrateModels/Interfaces/IPerson';
import { AppError } from 'projects/c-grate-common/src/lib/cGrateModels/Common/app-error';
import { NotFoundError } from 'projects/c-grate-common/src/lib/cGrateModels/Common/not-found-error';
import { EGenders } from 'projects/c-grate-common/src/lib/cGrateModels/Enums/GenderEnum';
import { UserServiceService } from 'projects/c-grate-common/src/lib/cGrateServices/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-capture-page',
  templateUrl: './emp-capture-page.component.html',
  styleUrls: ['./emp-capture-page.component.css']
})
export class EmpCapturePageComponent implements OnInit {
  newEmp:IPerson=null;
  loading:true;
  genders=EGenders;
  keys() : Array<string> {//Enum Property to dynamically populate the Genders block
    var keys = Object.keys(this.genders);
    return keys.slice(0,3);
}
  constructor(private router:Router,private empService:UserServiceService) { 
    this.newEmp = new Employee();
  }
  dateOfBirtChanged(event)
  {
    this.newEmp.dateOfBirth = event;
  }
  ngOnInit() {
  }


  captureEmp()//Capturing Employee Details to be posted to the "Back End"
  {
    this.loading = true;
    console.log(JSON.stringify(this.newEmp));
    this.empService.Post(this.newEmp).subscribe(result=>{
      this.router.navigate(['/employees']); 
     },(error:AppError)=>{// Error Handling
         if(error instanceof NotFoundError)
         console.log("This post has already been deleted");
         else{
           alert("Unexpected Error Occured");
           console.log("Unexpected Error Occured");
         }
          
     })
  }

  PostUser()
  {
  
      
  }

}
