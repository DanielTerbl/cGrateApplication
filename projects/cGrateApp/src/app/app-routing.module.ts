import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CLoginComponent } from './cGratePages/clogin/clogin.component';
import { EmpCapturePageComponent } from './cGratePages/emp-capture-page/emp-capture-page.component';
import { EmployeeViewerComponent } from './cGratePages/employee-viewer/employee-viewer.component';
import { AuthGuard } from './RouteGuard/auth-guard.service';

const routes: Routes = [
  {path:"",component:CLoginComponent},
  {path:"main",component:EmpCapturePageComponent,canActivate:[AuthGuard]},
  {path:"employees",component:EmployeeViewerComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
