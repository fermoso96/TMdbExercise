import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { DetailComponent } from './detail/detail.component';
import { CastDetailComponent } from './cast-detail/cast-detail.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';



@NgModule({
  entryComponents: [

  ],
  declarations: [
    MovieCardComponent,
    DetailComponent,
    CastDetailComponent,
    SlideshowPosterComponent
  ],
  exports: [
    MovieCardComponent,
    DetailComponent,
    CastDetailComponent,
    SlideshowPosterComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
