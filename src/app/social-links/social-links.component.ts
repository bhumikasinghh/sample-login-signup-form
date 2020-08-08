import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  constructor(public authservice:AuthService) { }

  // Sign in with Facebook
  FacebookAuth() {
    return this.authservice.AuthLogin((new auth.FacebookAuthProvider()));
  }  

// Sign in with Google
  GoogleAuth() {
    return this.authservice.AuthLogin((new auth.GoogleAuthProvider()));
  }
  
// Sign in with Github
  GithubAuth() {
    return this.authservice.AuthLogin((new auth.GithubAuthProvider()));
  }
  // Sign in with Twitter
  TwitterAuth() {
    return this.authservice.AuthLogin((new auth.TwitterAuthProvider()));
  }
  ngOnInit(): void {
  }

}
