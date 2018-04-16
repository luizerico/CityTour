import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Account } from './account';
import { environment } from '../../environments/environment';
import { content_headers } from '../core/content_headers';

if (environment.production) { }

@Injectable()
export class AccountService {

  // The final / is required by django when APPEND_SLASH=True
  private account_url_api = '/api/V1/accounts/';

  constructor(private _http: Http) {}

  getAllAccounts(): Observable<Account[]> {
    return this._http.get(this.account_url_api, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error : getAccounts'));
  }

  getRelatedAccounts(account_id: number): Observable<Account[]> {
    // console.log(account_id);
    return this._http.get(this.account_url_api + '?accounts=' + account_id, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error : getRelatedAccounts'));
  }


  getAccount(account_id: string): Observable<Account> {
    return this._http.get(this.account_url_api + account_id, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error : getAccounts'));
  }

  addAccount(body: Object): Observable<Account[]> {
    return this._http.post(this.account_url_api, body, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error : addAccount'));
  }

  updateAccount(body: Object): Observable<Account[]> {
    // Wont use a separator slash due to django issues
    console.log(body);
    return this._http.put(`${this.account_url_api}${body['id']}/`, body, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error : updateAccount'));
  }

  deleteAccount(id: number): Observable<Account[]> {
    console.log("deleting ", id);

    const body = { deleted: 1 };

    return this._http.put(`${this.account_url_api}${id}/`, body, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error : deleteAccount'));
  }

  blockAccount(id: string): Observable<Account[]> {
    // status = 1 => image blocked
    const body = { status: 1 }
    return this._http.put(`${this.account_url_api}${id}/`, body, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error blocking the picture with the id ' + id))
  }

  unblockAccount(id: string): Observable<Account[]> {
    // status = 1 => image blocked
    const body = { status: 0 }
    return this._http.put(`${this.account_url_api}${id}/`, body, { headers: content_headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error unblocking the picture with the id ' + id))
  }
}



