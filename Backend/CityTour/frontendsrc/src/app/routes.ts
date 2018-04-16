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

export const routes: Routes = [
  { path: '', component: HomeComponent },

  // Account Routes
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'account/edit/:id', component: AccountEditComponent },
  { path: 'account/view/:id', component: AccountViewComponent },

  // Picture Routes
  { path: 'pictures', component: PictureListComponent },
  { path: 'pictures/create', component: PictureCreateComponent },
  { path: 'pictures/edit/:id', component: PictureEditComponent },
  { path: 'pictures/view/:id', component: PictureViewComponent },

  // Picture Routes
  { path: 'map', component: MapViewComponent },

]
