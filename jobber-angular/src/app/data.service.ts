import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Job } from "./post-job.service";
import {Users} from "./users";

@Injectable({
  providedIn: "root"
})
export class DataService {
  baseUrl = "http://localhost:8000"; // Trocar para  "http://tomas99batista.pythonanywhere.com" antes de ser deployed;

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    const url = `${this.baseUrl}/users/`;
    return this.httpClient.get(url);
  }

  getCompanies() {
    const url = `${this.baseUrl}/empresa/`;
    return this.httpClient.get(url);
  }

  getJobs(): Observable<Job[]> {
    const url = `${this.baseUrl}/emprego/`;
    return this.httpClient.get<Job[]>(url);
  }

}
