import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {Router} from '@angular/router';
import {DataService} from '../data.service';
import {Users} from '../users';
import {JobSectorEnum} from "../shared.enum";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Profile';
  users: Users[] = [];
  baseUrl = 'http://localhost:4200';
  firstname = ''
  lastname = ''
  birthdate = ''
  email = sessionStorage.getItem('email');
  phone = ''
  city = ''
  website = ''
  sector = ''

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(response => {
      this.users = response;
    });
  }

  getFirstName(){
    let firstname = this.users
      .filter(user => user.first_name === firstname);
  }

}
