import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  title = 'Search';
  baseUrl: 'http://localhost:4200';
  searchText;

  constructor(private httpClient: HttpClient) {
  }

  get_jobs() {
    this.httpClient.get(this.baseUrl + '/jobs').subscribe((res) => {
      console.log(res);
    });
  }
}
