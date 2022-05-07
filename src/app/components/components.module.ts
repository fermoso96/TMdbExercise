import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { MovieCardComponent } from './movie-card/movie-card.component';



@NgModule({
  entryComponents: [

  ],
  declarations: [
    MovieCardComponent
  ],
  exports: [
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
