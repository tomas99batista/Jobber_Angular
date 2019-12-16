import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  ButtonClick() {
    this.authService.login(this.email, this.password).subscribe((res) => {
      console.log(res.user);
    })
  }
}
