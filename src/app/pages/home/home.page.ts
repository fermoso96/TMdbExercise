import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  recentMovies: Movie[] = [];

  constructor(private moviesSrv: MoviesService) { }

  ngOnInit(): void {
    this.getRecents();
  }

  getRecents() {
    this.moviesSrv.getRecentMovies().subscribe(data => {
      this.recentMovies = data['results'];
    });
  }

}
