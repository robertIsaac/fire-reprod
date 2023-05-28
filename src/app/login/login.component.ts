import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private readonly fireAuth = inject(AngularFireAuth);

  constructor() {
  }

  async loginWithGoogle() {
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
