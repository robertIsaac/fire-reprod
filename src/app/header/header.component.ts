import { Component, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  readonly fireAuth = inject(Auth);
  readonly user = user(this.fireAuth);

  async logout() {
    await this.fireAuth.signOut();
  }
}
