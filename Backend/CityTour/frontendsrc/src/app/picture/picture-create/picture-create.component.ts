import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';
import { PictureService } from '../picture.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-picture-create',
  templateUrl: './picture-create.component.html',
  styleUrls: ['./picture-create.component.css']
})

export class PictureCreateComponent implements OnInit {

  picture = new Picture('', '', '', '', '', '', '', '');
  filesToUpload: Array<File> = [];
  pos: any;

  editing = false;

  constructor(private _pictureService: PictureService, private _router: Router) { }

  ngOnInit() {
    this.getLocation();
  }

  ngOnChanges() {
  }


  getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(this.pos.lat  );
    }, () => {
      // Browser doesn't support Geolocation
      console.log("Unable to use geoLocation");
    });
  }

  submitPicture() {

    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    //console.log(files);

    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }

    formData.append('location', this.picture.location);
    formData.append('description', this.picture.description);
    formData.append('lat', this.pos.lat);
    formData.append('lng', this.pos.lng);

    this._pictureService.createPicture(formData)
      .subscribe(pictures => {
        this.picture = new Picture('', '', '', '', '', '', '', '');
        // EmitterService.get(this.listId).emit(pictures);
      });
    this._router.navigateByUrl('pictures');
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }

  cancelInsert() {
    this._router.navigateByUrl('pictures');

  }

}
