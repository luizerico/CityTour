import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
    this.loadAccounts();
  }

  ngOnChanges(changes: any) {
    /*EmitterService.get(this.listId).subscribe((customers: Customer[]) => {
      this.loadCustomers();
    });*/
  }

  loadAccounts() {
    console.log('loading customers');
    this._accountService.getAllAccounts()
      .subscribe(
      accounts => this.accounts = accounts,
      err => console.log(err)
      );
  }

  deleteAccount(id: number) {
    console.log("delete account: ", id);
    this._accountService.deleteAccount(id)
      .subscribe(() => {
        this.loadAccounts();
      },
      err => {
        console.log(err);
      });
  }

  blockAccount(id: string) {
    console.log(id);
    this._accountService.blockAccount(id).subscribe(
      picture => this.loadAccounts(),
      (err) => console.log(err)
    );
  }

  unblockAccount(id: string) {
    this._accountService.unblockAccount(id).subscribe(
      picture => this.loadAccounts(),
      (err) => console.log(err)
    );
  }


}
