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
  heroes = [
    { title: 'Front-End Developer', job_sector: 'Tech', location: 'Aveiro', company: 'Delloite' },
    { title: 'Back-End Developer', job_sector: 'Tech', location: 'Porto', company: 'Google' },
    { title: 'Full-Stack Developer', job_sector: 'Tech', location: 'Lisboa', company: 'Blip' },
    { title: 'Limpezas', job_sector: 'Outros', location: 'Bragança', company: 'Casa Limpa'},
    { title: 'Cozinheiro', job_sector: 'Restauração', location: 'Porto', company: 'Curb'},
    { title: 'Copeiro', job_sector: 'Restauração', location: 'Lisboa', company: '100Maneiras'},
    { title: 'Actor', job_sector: 'Entretenimento', location: 'Lisboa', company: 'Tvi' },
    { title: 'Jornalista', job_sector: 'Jornalismo', location: 'Lisboa', company: 'CmTV'}
  ];



  constructor(private httpClient: HttpClient) {
  }

  get_jobs() {
    this.httpClient.get(this.baseUrl + '/jobs').subscribe((res) => {
      console.log(res);
    });
  }
}
