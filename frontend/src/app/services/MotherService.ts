import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MotherService {
  private url = 'http://localhost:8080/mothers';

  constructor (private http: Http) {}

  getMothersByPosition(latitude, longitude, maxDistance): Observable<any[]> {
    return this.http.get(this.url + "?lon=" + (longitude || 52.512334) + "&lat=" + (latitude || 13.390027) + "&distance=" + (maxDistance || 10000))
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getMothersByMidwife(id): Observable<any[]> {
    return this.http.get(this.url + "bymidwife?midwife=" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getMothersNearMidwife(id): Observable<any[]> {
    return this.http.get(this.url + "nearmidwife?midwife=" + id)
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
