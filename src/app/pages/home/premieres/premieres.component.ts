import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../interfaces';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-premieres',
  templateUrl: './premieres.component.html',
  styleUrls: ['./premieres.component.scss'],
})
export class PremieresComponent implements OnInit {

  premieres: Movie[] = [];

  constructor(public moviesSrv: MoviesService) { }

  ngOnInit() {
    this.getRecents();
  }

  getRecents() {
    this.moviesSrv.getRecentMovies().subscribe(data => {
      this.premieres = data['results'];
    });
  }

}
