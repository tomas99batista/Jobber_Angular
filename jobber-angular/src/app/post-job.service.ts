import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export interface Job {
  title: string;
  description: string;
  location: number;
  job_sector: number;
}

@Injectable({
  providedIn: "root"
})
export class PostJobService {
  baseUrl = "http://localhost:8000"; // Trocar para  "http://tomas99batista.pythonanywhere.com" antes de ser deployed;

  constructor(private http: HttpClient) {}

  public postJob(job: Job): Observable<{ job: Job }> {
    const url = `${this.baseUrl}/emprego/`;
    return this.http.post<{ job: Job }>(url, job);
  }
}
