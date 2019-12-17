import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './auth-service.service';
import {HttpClient} from '@angular/common/http';

export interface Job {
  title: string;
  description: string;
  location: string;
  job_sector: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostJobService {

  constructor(private http: HttpClient) {
  }

  public postJob(job: Job): Observable<{ job: Job }> {
    return this.http.post<{ job: Job }>('http://127.0.0.1:8000/', {...job});
  }
}
