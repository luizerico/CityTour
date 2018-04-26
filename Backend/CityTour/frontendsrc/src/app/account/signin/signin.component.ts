import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  message: string;

  constructor(
    private _router: Router,
    private _http: Http) { }

  ngOnInit() { }

  signin(event, username, password) {
    event.preventDefault();
    // Stringify function works on django/rest but not for Express.
    // let body = JSON.stringify({ username, password });
    // console.log(body);
    this._http.post('/api/v1/authenticate/', { username, password })
      .subscribe(
      response => {
        sessionStorage.setItem('token', 'Bearer ' + response.json().token);
        sessionStorage.setItem('userId', response.json().userId);

        localStorage.setItem('token', response.json().token);
        // content_headers.set('Authorization', sessionStorage.getItem('token'));
        this._router.navigate(['home']);
      },
      error => {
        this._router.navigate(['signin']);
        this.message = "User or Password Invalid";
      });
  }

}
