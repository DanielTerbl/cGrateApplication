import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CGrateAuthService } from 'projects/c-grate-common/src/lib/cGrateServices/c-grate-auth.service';

@Component({
  selector: 'app-c-grate-nav',
  templateUrl: './c-grate-nav.component.html',
  styleUrls: ['./c-grate-nav.component.css']
})
export class CGrateNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private authService:CGrateAuthService) {}
  ViewEmployees()
  {
    this.router.navigate(['/employees']);
  }

  CaptureEmployee()
  {
    this.router.navigate(['/main']);
  }

  Logout()
  {
    this.authService.Logout();
    console.log("User SUccessfully logged Out");
    this.router.navigate(['/']);
  }
}
