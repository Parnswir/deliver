import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MidwifeService {
  // todo: access location service:
  private url = 'http://deliver-backend:8080/midwives?lon=52.512334&lat=13.390027';
  private randomUrl = 'http://deliver-backend:8080/random?from=midwives';

  constructor (private http: Http) {}

  getMidwives(): Observable<any[]> {
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getRandom(): Observable<any[]> {
    return this.http.get(this.randomUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
