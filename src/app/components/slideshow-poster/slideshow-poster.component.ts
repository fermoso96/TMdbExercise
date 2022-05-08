import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() movies: any[] = [];

  slideOptions = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 3.4,
    spacebetween: 10,
    freeMode: true
  };

  constructor(private modalCtlr: ModalController) { }

  ngOnInit() { }

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
