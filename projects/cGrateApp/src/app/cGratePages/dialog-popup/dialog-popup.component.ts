import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPerson } from 'projects/c-grate-common/src/lib/cGrateModels/Interfaces/IPerson';
import { EGenders } from 'projects/c-grate-common/src/lib/cGrateModels/Enums/GenderEnum';
import { UserServiceService } from 'projects/c-grate-common/src/lib/cGrateServices/user-service.service';
import { AppError } from 'projects/c-grate-common/src/lib/cGrateModels/Common/app-error';
import { NotFoundError } from 'projects/c-grate-common/src/lib/cGrateModels/Common/not-found-error';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'lib-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {
  genders=EGenders;
  loading:boolean=false;
  keys() : Array<string> {
    var keys = Object.keys(this.genders);
    return keys.slice(0,3);
}
  constructor(private router:Router,private userService:UserServiceService,private _formBuilder: FormBuilder  ,public dialogRef: MatDialogRef<DialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public newEmp: IPerson) { }

UpdateUser()//Calls that updates the user in the cache "the fake backed"
{this.loading = true;
this.userService.Update(this.newEmp,this.newEmp.id).subscribe(result=>{
  console.log('User Updated');
  this.dialogRef.close();
},(error:AppError)=>{// Error Handling
  if(error instanceof NotFoundError)
  console.log("This use is no longer Here");
  else{
    alert("Unexpected Error Occured");
    console.log("Unexpected Error Occured");
  }
}
);
}

RemoveUser()//Calls that removes the user from the cache "the fake backed"
{this.loading = true;
  this.userService.Delete(this.newEmp.id).subscribe(result=>{
    console.log('User Deleted');
    this.dialogRef.close();
    this.router.navigate(['/main']);
  },(error:AppError)=>{// Error Handling
    if(error instanceof NotFoundError)
    console.log("This user has already been deleted");
    else{
      alert("Unexpected Error Occured");
      console.log("Unexpected Error Occured");
    }
    this.loading = false;
  }
  );
}

  ngOnInit() {
  }

}
