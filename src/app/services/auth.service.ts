import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
   }
  
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }
 /* Sign up */
SignUp(email: string, password: string) {
  this.afAuth
  .auth
  .createUserWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully signed up!', res);
  })
  .catch(error => {
  console.log('Something is wrong:', error.message);
  });
  }
   
  /* Sign in */
  SignIn(email: string, password: string) {
  this.afAuth
  .auth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully logged in!');
  })
  .catch(err => {
  console.log('Something is wrong:',err.message);
  });
  }
  
    /* Sign out */
  SignOut() {
  this.afAuth
  .auth
  .signOut();
  }

}
