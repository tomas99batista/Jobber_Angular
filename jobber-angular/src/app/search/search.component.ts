import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Job } from "../post-job.service";
import { JobSectorEnum, LocationEnum } from "../shared.enum";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = "Search";
  baseUrl = "http://localhost:4200";
  searchText = "";
  jobs: Job[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getJobs().subscribe(response => {
      this.jobs = response;
    });
  }

  getJobName = (jobId: number) => {
    return JobSectorEnum[jobId];
  };

  getJobLocation = (locationId: number) => {
    return LocationEnum[locationId];
  };

  onRowClick = (job: Job) => {
    alert(JSON.stringify(job));
  };
}
