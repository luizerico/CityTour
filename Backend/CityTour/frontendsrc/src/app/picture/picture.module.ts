import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureViewComponent } from './picture-view/picture-view.component';
import { PictureEditComponent } from './picture-edit/picture-edit.component';
import { PictureService } from './picture.service';
import { RouterModule } from '@angular/router';
import { PictureCreateComponent } from './picture-create/picture-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  declarations: [PictureListComponent, PictureViewComponent, PictureEditComponent, PictureCreateComponent],
  providers: [
    PictureService
  ]
})
export class PictureModule { }
