import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PictureService } from '../picture.service';
import { Picture } from '../picture';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {

  @Input() pictureId: any;
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

  deletePicture(id: string) {
    this._pictureService.deletePicture(id).subscribe(
      picture => this.loadPictures(),
      (err) => console.log(err)
    );
   
  }

  blockPicture(id: string) {
    this._pictureService.blockPicture(id).subscribe(
      picture => this.loadPictures(),
      (err) => console.log(err)
    );
  }

  unblockPicture(id: string) {
    this._pictureService.unblockPicture(id).subscribe(
      picture => this.loadPictures(),
      (err) => console.log(err)
    );
  }

}
