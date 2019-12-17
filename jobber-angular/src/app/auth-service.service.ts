import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// Ver modelo de Django e adicionar
export interface User {
  first_name: string;
  last_name: string;
  b_date: string;
  email: string;
  password: string;
  phone: string;
  city: string;
  website: string;
  sector: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<{ user: User }> {
    return this.http.post<{ user: User }>('http://127.0.0.1:8000/auth/login_user/', {'email': email, 'password': password});
  }

  public register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/auth/register_user/', {...user});
  }
}
