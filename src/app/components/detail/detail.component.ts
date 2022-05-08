import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, MovieCredits } from '../../interfaces/index';
import { LocaldataService } from '../../services/localdata.service';
import { CastDetailComponent } from '../cast-detail/cast-detail.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() movieId;
  movieDetail: MovieDetail = {};
  movieCredits: MovieCredits = {};
  hide = 150;
  favortie = false;

  slideOptionsCast = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3.3,
    spacebetween: -5,
    freeMode: true
  };

  constructor(private modalCtlr: ModalController, private moviesSrv: MoviesService, public localdataSrv: LocaldataService) {

  }

  ngOnInit() {
    this.getMovieDetail();
    this.getMovieCredits();
    setTimeout(() => {
      this.favortie = this.localdataSrv.checkMovie(this.movieDetail);
    }, 100);
  }

  onExit() {
    this.modalCtlr.dismiss({
      title: 'EXIT'
    });
  }

  getMovieDetail() {
    this.moviesSrv.getMovieDetail(this.movieId).subscribe(result => {
      this.movieDetail = result;
    })
  }

  getMovieCredits() {
    this.moviesSrv.getMovieCredits(this.movieId).subscribe(result => {
      this.movieCredits = result;
    })
  }


  async presentModal(cast) {
    const modal = await this.modalCtlr.create({
      component: CastDetailComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'cast': cast
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
    }
  }
}
