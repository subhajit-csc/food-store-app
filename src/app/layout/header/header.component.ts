import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private _authService: AuthService) {
    console.log('Header constructor called');
  }

  ngOnInit() {
  }
  get authService() { return this._authService }

  isLoggedIn() {
    return this._authService.isLoggedIn();
  }
  logout() {
    //this._authService.logout()
    //this.router.navigate(['/login']);

    //console.log("Login submited")
    this.authService.logout()
      .subscribe(result => {           
        this.router.navigate(['/login']);        
      },
        error => {
          //this.invalidLogin = true;
          console.log("Logout error!!")
        } // error path
      );
  }
}
