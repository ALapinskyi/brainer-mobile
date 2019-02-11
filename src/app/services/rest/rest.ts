import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class RestProvider {

  /*const endpoint = 'http://localhost:3000/api/v1/';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };*/

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public extractData(res: Response) {
    const body = res;
    return body || { };
  }

  public handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      // const err = body.error || JSON.stringify(body);
      // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    // return Observable.throw(errMsg);
    return errMsg;
  }

}
