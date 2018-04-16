import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';
import { ActivatedRoute , Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Picture } from '../picture';

@Component({
  selector: 'app-picture-edit',
  templateUrl: './picture-edit.component.html',
  styleUrls: ['./picture-edit.component.css']
})
export class PictureEditComponent implements OnInit {
  
  picture = new Picture('', '', '', '', '', '', '', '');
  editing = false;

  constructor(private _pictureService: PictureService, private _route: ActivatedRoute, private _router: Router) {
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
  
  submitPicture() {
    console.log(this.picture);

    this._pictureService.updatePicture(this.picture).subscribe(
      pictures => {
        this.picture = new Picture('', '', '', '', '', '', '', '');
        //this.editing = false;
      });

    this._router.navigateByUrl('pictures');
  }

  cancelEdit() {
    this._router.navigateByUrl('pictures');

  }

}
