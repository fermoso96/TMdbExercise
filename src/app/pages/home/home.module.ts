import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from '../../components/components.module';
import { SearchComponent } from './search/search.component';
import { PremieresComponent } from './premieres/premieres.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    SearchComponent,
    HomePage,
    PremieresComponent
  ],
  exports: [
    SearchComponent,
    HomePage,
    PremieresComponent
  ]
})
export class HomePageModule { }
