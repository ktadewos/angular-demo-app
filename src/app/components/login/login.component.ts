import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};
  errormsg: string = '';

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user).subscribe(res => {
      if(res){
        window.localStorage.setItem("token",res);
        this.authService.getCurrentUserApi().subscribe(user => {
          if(user){
            window.localStorage.setItem("userData", JSON.stringify(user));
            this.router.navigate(['/person/list'])
          }
        })

        this.errormsg = '';

      }else{
        this.user.email = '';
        this.user.password = '';
       this.errormsg ="Invalid username or password!"
      }
    },err => {
      this.user.email = '';
        this.user.password = '';
      this.errormsg ="Invalid username or password!"
    })
  }

}
