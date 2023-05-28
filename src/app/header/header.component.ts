import { Component, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  readonly fireAuth = inject(AngularFireAuth);

  async logout() {
    await this.fireAuth.signOut();
  }
}
