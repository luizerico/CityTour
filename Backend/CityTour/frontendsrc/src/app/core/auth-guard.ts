import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { content_headers } from './content_headers';

@Injectable()
export class AuthGuard implements CanActivate {
  private auth = new Auth();

  constructor(private router: Router) { }

  canActivate() {
    if (content_headers.get('Authorization') == null) {
      content_headers.set('Authorization', sessionStorage.getItem('token'));
    }
    if (this.auth.loggedIn()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
}
