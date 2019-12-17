import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthServiceService } from "../auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  ButtonClick() {
    this.authService.login(this.email, this.password).subscribe(res => {
      this.router.navigate(["/index"]);
    });
  }
}
