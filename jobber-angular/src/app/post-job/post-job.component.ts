import { Component, OnInit } from "@angular/core";
import { Job, PostJobService } from "../post-job.service";
import { User } from "../auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-job",
  templateUrl: "./post-job.component.html",
  styleUrls: ["./post-job.component.css"]
})
export class PostJobComponent implements OnInit {
  title = "";

  description = "";

  location = 0;

  jobSector = 0;

  constructor(private postjob: PostJobService, private router: Router) {}

  ngOnInit() {}

  ButtonClick() {
    const job: Job = {
      title: this.title,
      description: this.description,
      location: Number(this.location),
      job_sector: Number(this.jobSector)
    };

    this.postjob.postJob(job).subscribe(res => {
      this.router.navigate(["/search"]);
    });
  }
}
