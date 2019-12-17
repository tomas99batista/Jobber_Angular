import { Component, OnInit } from "@angular/core";
import { AuthServiceService, User } from "../auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  firstName = "";

  lastName = "";

  bDate = "";

  email = "";

  password = "";

  phone = "";

  city = "";

  website = "";

  sector = "";

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  ButtonClick() {
    const user: User = {
      first_name: this.firstName,
      last_name: this.lastName,
      b_date: this.bDate,
      email: this.email,
      password: this.password,
      phone: this.phone,
      city: this.city,
      website: this.website,
      sector: this.sector
    };
    this.authService.register(user).subscribe(res => {
      this.router.navigate(["/login"]);
    });
  }
}
