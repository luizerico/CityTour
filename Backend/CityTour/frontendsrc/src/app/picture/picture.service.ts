import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { content_headers } from '../core/content_headers';
import { Picture } from './picture';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class PictureService {
  private base_url = '/api/v1/pictures/'

  constructor(private _http: Http) { }

  adminGetAllPictures(): Observable<Picture[]> {
    return this._http.get(this.base_url, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error retrieving pictures'));
  }

  getAllPictures(searchable: string): Observable<Picture[]> {
    return this._http.get(this.base_url + 'search/' + searchable, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error retrieving pictures'));
  }

  getPicture(id: string): Observable<Picture> {
    return this._http.get(this.base_url + id, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error retrieving the picture with the id ' + id));
  }


  createPicture(body: Object): Observable<Picture[]> {
    console.log('Inserting new picture');
    console.log(body);

    let custom_content_headers = new Headers();
    // custom_content_headers.append('Content-Type', 'undefined');
    // contentHeaders.append('Authorization', localStorage.getItem('token'));
    custom_content_headers.append('Authorization', sessionStorage.getItem('token'));

    return this._http.post(this.base_url, body, { headers: custom_content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error inserting a new picture'))
  }

  updatePicture(body: Object): Observable<Picture[]> {
    console.log("Updating ", body['_id']);
    return this._http.put(this.base_url + body['_id'], body,{ headers: content_headers })
      .map((res: Response) => res.json)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error updating the picture with the id ' + body['_id']));
  }

  deletePicture(id: string): Observable<Picture[]> {
    console.log("Deleting ", id);

    const body = { deleted: 1 };

    return this._http.put(this.base_url + 'delete/' + id, body, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error deleting the picture wiht the id ' + id));
  }

  blockPicture(id: string): Observable<Picture[]> {
    // status = 1 => image blocked
    const body = { status: 1 }
    return this._http.put(this.base_url + id, body, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error blocking the picture with the id ' + id))
  }

  unblockPicture(id: string): Observable<Picture[]> {
    // status = 1 => image blocked
    const body = { status: 0 }
    return this._http.put(this.base_url + id, body, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error unblocking the picture with the id ' + id))
  }


}
