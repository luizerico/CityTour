import { Component, OnInit } from '@angular/core';

import { Picture } from '../../picture/picture';
import { PictureService } from '../../picture/picture.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  pictures: Picture[];
  vsearch: any;

  constructor(private _pictureService: PictureService) { }

  ngOnInit() {
    this.loadPictures();
  }

  ngOnDestroy() {
    
  }

  loadPictures() {
    if (this.vsearch == '') this.vsearch = 'undefined';
    this._pictureService.getAllPictures(this.vsearch).subscribe(
      pictures => this.pictures = pictures,
      (err) => console.log(err)
    );
  }

  fsearch() {
    console.log(this.vsearch);
    this.loadPictures()

    console.log(this.pictures);
  }

  isUserLogged() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

}
