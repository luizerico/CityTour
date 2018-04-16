import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-picture-view',
  templateUrl: './picture-view.component.html',
  styleUrls: ['./picture-view.component.css']
})
export class PictureViewComponent implements OnInit {

  picture: any;

  constructor(private _pictureService: PictureService, private _route: ActivatedRoute) {
    this._route.params.subscribe(params => this.loadPicture(params['id']));
  }

  ngOnInit() {
  }

  loadPicture(id) {
    this._pictureService.getPicture(id)
      .subscribe(
        picture => this.picture = picture,
        err => console.log(err)
    );
  }

}
