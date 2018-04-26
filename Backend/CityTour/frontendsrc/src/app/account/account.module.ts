import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { RouterModule } from '@angular/router';
import { AccountService } from './account.service';
import { FormsModule } from '@angular/forms';
import { AccountViewComponent } from './account-view/account-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    AccountListComponent
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    AccountListComponent,
    AccountEditComponent,
    AccountViewComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }
