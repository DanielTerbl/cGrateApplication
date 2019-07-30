import { Component, OnInit } from '@angular/core';
import { IPerson } from 'projects/c-grate-common/src/lib/cGrateModels/Interfaces/IPerson';
import { UserServiceService } from 'projects/c-grate-common/src/lib/cGrateServices/user-service.service';
import { AppError } from 'projects/c-grate-common/src/lib/cGrateModels/Common/app-error';
import { EGenders } from 'projects/c-grate-common/src/lib/cGrateModels/Enums/GenderEnum';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';


@Component({
  selector: 'app-employee-viewer',
  templateUrl: './employee-viewer.component.html',
  styleUrls: ['./employee-viewer.component.css']
})
export class EmployeeViewerComponent implements OnInit {
userList:IPerson[];
noErrors:boolean=true;
loading:boolean=false;
  constructor(private userService:UserServiceService,public dialog: MatDialog) { }

  ngOnInit() {
    this.loading = true;
   this.userService.GetAll().subscribe((result:IPerson[])=>{
     console.log("The user result looks as follows "+JSON.stringify(result));
    this.userList = result;
    this.loading = false;
   },(error:AppError)=>
   {
     alert('An Unexpected Error Occured');
    this.loading = false;
   });
  }
  openDialog(data1:IPerson): void {//OPens the Modal to display the User View
    console.log("About to Open Dialog with data "+JSON.stringify(data1));
    const dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '90%',
      height:'90%',
      data:data1
    });
  }

}
