import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService) { }

  login(loginForm: NgForm){
    if(loginForm && loginForm.valid){
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);
      // Navigate to the Product List page after log in.
    }else{
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

  ngOnInit() {
  }

}
