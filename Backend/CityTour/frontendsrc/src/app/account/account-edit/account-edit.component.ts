import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  account = new Account(1, '', '', '', '', '', '', '');
  editing = true;

  constructor(private _accountService: AccountService, private route: ActivatedRoute, private _router: Router) {
    this.route.params.subscribe(params => this.loadAccount(params['id']));
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  loadAccount(id) {
    this._accountService.getAccount(id)
      .subscribe((account) => {
        this.account = account
      },
      err => console.log(err)
      );
  }

  submitAccount() {
    this._accountService.updateAccount(this.account).subscribe(
      accounts => {
        // EmitterService.get(this.listId).emit(accounts);
        this.account = new Account(1, '', '', '', '', '', '', '');
        //this.cancelForm();
      });

    this._router.navigateByUrl('users');

  }

  cancelEdit() {
    this._router.navigateByUrl('users')
  }

}
