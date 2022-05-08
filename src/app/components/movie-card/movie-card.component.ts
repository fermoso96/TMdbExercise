import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces';
import { LocaldataService } from 'src/app/services/localdata.service';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail } from '../../interfaces/index';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

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
    private movieSrv: MoviesService,
    private modalCtlr: ModalController
  ) { }

  ngOnInit() {
    this.movieSrv.getMovieDetail(this.movie.id.toString()).subscribe(res => {
      this.movieDetail = res;
      this.favorite = this.localdataSrv.checkMovie(res);
    })
  }

  onFavorite(ev) {
    ev.stopPropagation();
    this.localdataSrv.saveRemoveMovie(this.movieDetail);
    this.favorite = this.localdataSrv.checkMovie(this.movieDetail);
    this.refresh.emit();
  }

  async presentModal() {
    const modal = await this.modalCtlr.create({
      component: DetailComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'movieId': this.movie.id
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
    }
  }

}
