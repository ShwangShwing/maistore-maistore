import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IWorker } from '../../public/workers/worker/worker';

@Injectable()
export class WorkersService {
  private _workersUrl = '../../../api/data/workers.json';

  constructor(private _http: HttpClient) { }

  getWorkers(): Observable<IWorker[]> {
    return this._http.get<IWorker[]>(this._workersUrl)
        // .map((response: Response) => <ICar[]> response.json())
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        // .catch(this.handleError);
}

}
