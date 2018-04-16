import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }


  signout() {
    if (confirm('You will be logout. Are you sure?')) {
      localStorage.removeItem('token');
      sessionStorage.clear();
      // this.router.navigate(['/login']);
      this.router.navigateByUrl('signin');
    }
  }

  isUserLogged() {
    return true;
    /*if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }*/
  }

}
