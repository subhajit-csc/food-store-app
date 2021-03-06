import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //currentUser: any
  constructor(private router: Router, private _authService: AuthService) {
    
  }

  ngOnInit(): void {
   // this.currentUser = this.authService.currentUser.name
  }

  
}
