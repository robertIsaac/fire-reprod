import { Component, inject } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private readonly fireAuth = inject(Auth);

  constructor() {
  }

  async loginWithGoogle() {
    await signInWithPopup(this.fireAuth, new GoogleAuthProvider());
  }
}
