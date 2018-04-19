import { Component, OnInit, OnChanges } from '@angular/core';
//import { EmitterService } from "../../core/emitter.service";
import { Observable } from "rxjs/Observable";
import { AccountService } from "../account.service";
import { Account } from '../account';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model = new Account (1, '', '', '', '', '', '', '');
  editing = false;

  constructor(private _accountService: AccountService, private _router: Router) { }

  ngOnInit() { }

  ngOnChanges() {
  }

  submitAccount() {
    let accountOperation: Observable<Account[]>;

    console.log(this.model);

    if (!this.editing) {
      accountOperation = this._accountService.addAccount(this.model);
    } else {
      accountOperation = this._accountService.updateAccount(this.model);
    }

    accountOperation.subscribe(
      accounts => {
        // EmitterService.get(this.listId).emit(accounts);
        this.model = new Account(1, '', '', '', '', '', '', '');
        this.editing = false;
        //this.cancelForm();
      },
      error => {
        this._router.navigate(['/signup']);
        console.log(error.toString());
      });

    this._router.navigateByUrl('signin');

  }
}
