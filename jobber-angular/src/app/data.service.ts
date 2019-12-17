import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: 'http://localhost:4200';

  constructor(private httpClient: HttpClient) {
  }

  get_users() {
    return this.httpClient.get(this.baseUrl + '/users');
  }

  get_company() {
    return this.httpClient.get(this.baseUrl + '/company');
  }

  get_jobs() {
    return this.httpClient.get(this.baseUrl + '/jobs');
  }

}
