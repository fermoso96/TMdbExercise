import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(public moviesSrv: MoviesService,
    private router: Router) { }

  ngOnInit() {
    if (!this.moviesSrv.searchResults.value) {
      this.router.navigate(['/home']);
    }
  }

}
