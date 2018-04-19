import { Component, OnInit } from '@angular/core';

import { Picture } from '../../picture';
import { PictureService } from '../../picture/picture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pictures: Picture[];

  constructor(private _pictureService: PictureService) { }

  ngOnInit() {
    this.loadPictures();
  }

  loadPictures() {
    this._pictureService.getAllPictures().subscribe(
      pictures => this.pictures = pictures,
      (err) => console.log(err)
    );
  }

}
