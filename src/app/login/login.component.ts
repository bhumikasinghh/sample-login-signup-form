import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email: string;
password: string;

  constructor(public authService: AuthService) { }

  
  
  // Sign up with Email and Password
  signUp() {
    this.authService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }
     
    signIn() {
    this.authService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    }
     
    signOut() {
    this.authService.SignOut();
    }
     
}
