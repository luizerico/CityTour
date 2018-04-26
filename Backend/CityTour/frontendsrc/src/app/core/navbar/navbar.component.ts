import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private _router: Router) { }

  ngOnInit() {
  }

  search(search) {
    search.preventDefault();
    console.log("Searching : ", search.value);
  }


  signout() {
    if (confirm('You will be logout. Are you sure?')) {
      localStorage.removeItem('token');
      sessionStorage.clear();
      // this._router.navigate(['/login']);
      this._router.navigateByUrl('/'); 
    }
  }

  isUserLogged() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

}
