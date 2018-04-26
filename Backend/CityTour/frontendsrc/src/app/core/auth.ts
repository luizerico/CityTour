import { tokenNotExpired } from 'angular2-jwt';

export class Auth {

  constructor() { }

  loggedIn() {
    if (tokenNotExpired()) {
      return true;
    }
    // alert('Session Expired.\n Login again...');
    return false;
  }
}
