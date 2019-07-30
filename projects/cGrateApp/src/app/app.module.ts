import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CLoginComponent } from './cGratePages/clogin/clogin.component';
import { LoadingSpinnerComponent } from 'projects/c-grate-common/src/lib/cGrateComponents/loading-spinner/loading-spinner.component';
import { EmpCapturePageComponent } from './cGratePages/emp-capture-page/emp-capture-page.component';
import { CGrateNavComponent } from './Layout/c-grate-nav/c-grate-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { MaterialModule } from './Material.Module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from 'projects/c-grate-common/src/lib/cGrateServices/user-service.service';
import { CGrateFakeBackend } from 'projects/c-grate-common/src/lib/Helpers/cGrateFakeBackend';
import { EmployeeViewerComponent } from './cGratePages/employee-viewer/employee-viewer.component';
import { CGrateAuthService } from 'projects/c-grate-common/src/lib/cGrateServices/c-grate-auth.service';
import { AuthGuard } from './RouteGuard/auth-guard.service';
import { DialogPopupComponent } from './cGratePages/dialog-popup/dialog-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    CLoginComponent,
    LoadingSpinnerComponent,
    EmpCapturePageComponent,
    CGrateNavComponent,
    EmployeeViewerComponent,
    DialogPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    FormsModule,
    HttpClientModule ,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [CGrateAuthService,
    AuthGuard,    
    UserServiceService,CGrateFakeBackend],
    entryComponents: [
      DialogPopupComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
