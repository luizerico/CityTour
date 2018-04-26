import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { PictureListComponent } from './picture/picture-list/picture-list.component';
import { PictureEditComponent } from './picture/picture-edit/picture-edit.component';
import { PictureViewComponent } from './picture/picture-view/picture-view.component';
import { PictureCreateComponent } from './picture/picture-create/picture-create.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountViewComponent } from './account/account-view/account-view.component';
import { MapViewComponent } from './map/map-view/map-view.component';
import { IndexComponent } from './index/index.component';

import { AuthGuard } from './core/auth-guard';
import { ProfileComponent } from './account/profile/profile.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'home', canActivate: [AuthGuard], component: HomeComponent },

  // Account Routes
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'accounts', canActivate: [AuthGuard], component: AccountListComponent },
  { path: 'account-edit/:id', canActivate: [AuthGuard], component: AccountEditComponent },
  { path: 'account-view/:id', canActivate: [AuthGuard], component: AccountViewComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },

  // Picture Routes
  { path: 'pictures', canActivate: [AuthGuard], component: PictureListComponent },
  { path: 'pictures/create', canActivate: [AuthGuard], component: PictureCreateComponent },
  { path: 'pictures/edit/:id', canActivate: [AuthGuard], component: PictureEditComponent },
  { path: 'pictures/view/:id', canActivate: [AuthGuard], component: PictureViewComponent },

  // Picture Routes
  { path: 'map', canActivate: [AuthGuard], component: MapViewComponent },

]
