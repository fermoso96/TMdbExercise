import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private moviesSrv: MoviesService,
    private router: Router,) { }

  searchText = '';

  ngOnInit(): void {

  }

  search(event) {
    if (event.detail.value === '') {
      this.router.navigate(['/home']);
      this.moviesSrv.searchResults.next(false);
    } else {
      const value = event.detail.value.trimStart();
      if (value) {
        this.moviesSrv.searchMovies(value).subscribe(result => {
          this.moviesSrv.searchResults.next(result);
          this.router.navigate(['/home/search']);
        })
      } else {
        this.moviesSrv.searchResults.next(false);
        this.router.navigate(['/home']);
      }
    }
  }

}
