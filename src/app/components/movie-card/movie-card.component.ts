import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces';
import { LocaldataService } from 'src/app/services/localdata.service';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail } from '../../interfaces/index';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie = null;
  @Output() refresh = new EventEmitter<any>();
  movieDetail: MovieDetail = null;

  hide = 350;
  favorite = false;

  constructor(public localdataSrv: LocaldataService,
    private movieSrv: MoviesService
  ) { }

  ngOnInit() {
    this.movieSrv.getMovieDetail(this.movie.id.toString()).subscribe(res => {
      this.movieDetail = res;
      this.favorite = this.localdataSrv.checkMovie(res);
    })
  }

  onFavorite() {
    this.localdataSrv.saveRemoveMovie(this.movieDetail);
    this.favorite = this.localdataSrv.checkMovie(this.movieDetail);
    this.refresh.emit();
  }

}
