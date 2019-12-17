import {Component, OnInit} from '@angular/core';
import {Job, PostJobService} from '../post-job.service';
import {User} from '../auth-service.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  title = '';

  description = '';

  location = '';

  jobSector = '';

  constructor(private postjob: PostJobService) {
  }

  ngOnInit() {
  }

  ButtonClick() {
    const job: Job = {
      title: this.title,
      description: this.description,
      location: this.location,
      job_sector: this.jobSector,
    };

    this.postjob.postJob(job).subscribe((res) => {
      console.log(res.job);
    });
  }
}
