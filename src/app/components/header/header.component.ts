import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = {};

  constructor(private authService:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    this.route.navigate(['/login'])
  }

}
