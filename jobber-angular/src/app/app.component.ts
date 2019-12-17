import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "./data.service";
import { Jobs } from "./jobs";
import { Company } from "./company";
import { Users } from "./users";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "jobber-angular";
  searchText;

  constructor() {}
}
