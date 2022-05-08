import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, MovieCast, PersonResult } from '../../interfaces/index';
import { MoviesService } from '../../services/movies.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-cast-detail',
  templateUrl: './cast-detail.component.html',
  styleUrls: ['./cast-detail.component.scss'],
})
export class CastDetailComponent implements OnInit {

  @Input() cast: Cast = {};
  movies: MovieCast[];
  person: PersonResult = {};

  constructor(private modalCtlr: ModalController, private moviesSrv: MoviesService) { }

  ngOnInit() {
    this.getPersonDetails();
  }


  onExit() {
    this.modalCtlr.dismiss({
      title: 'EXIT'
    });
  }

  getPersonDetails() {
    this.moviesSrv.searchPerson(this.cast.name).subscribe(result => {
      console.log(result);
      this.person = result.results[0]
      this.getCastMovies();
    })
  }

  getCastMovies() {
    this.moviesSrv.moviesByCast(this.person.id).subscribe(result => {
      this.movies = result.cast;
    })
  }

  async presentModal(id) {
    const modal = await this.modalCtlr.create({
      component: DetailComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'movieId': id
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
    }
  }

}
