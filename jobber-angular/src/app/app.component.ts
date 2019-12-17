import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from './data.service';
import { Jobs } from './jobs';
import { Company } from './company';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'jobber-angular';
  searchText;
  private jobs: Jobs[] = [];
  private company: Company[] = [];
  private users: Users[] = [];

  private jobsObservable: Observable<Jobs[]>;

  constructor(private dataService: DataService) {

    // this.jobsObservable = this.dataService.get_jobs();

    this.dataService.get_company().subscribe((res: Company[]) => {
      this.company = res;
    });
    this.dataService.get_users().subscribe((res: Users[]) => {
      console.log(res);
      this.users = res;
    });
    this.dataService.get_jobs().subscribe((res: Jobs[]) => {
      console.log(res);
      this.jobs = res;
    });
  }
}


