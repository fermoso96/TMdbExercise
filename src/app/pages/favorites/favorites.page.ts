import { Component, OnInit } from '@angular/core';
import { LocaldataService } from '../../services/localdata.service';
import { MovieDetail } from '../../interfaces/index';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public selectedCategory: string = 'all';
  public favoritesAll: MovieDetail[] = [];
  public favoritesFiltered: MovieDetail[] = [];

  constructor(public localdataSrv: LocaldataService) { }

  ngOnInit(): void {
    this.favoritesAll = this.localdataSrv.favoriteMovies;
    this.filterByCategorie();
  }

  ionViewWillEnter() {
    this.favoritesAll = this.localdataSrv.favoriteMovies;
    this.filterByCategorie();
  }

  segmentChanged(event: Event) {
    this.selectedCategory = (event as CustomEvent).detail.value;
    this.filterByCategorie();
  }

  filterByCategorie() {
    this.favoritesFiltered = [];
    this.favoritesAll = this.localdataSrv.favoriteMovies;
    if (this.selectedCategory === 'all') {
      this.favoritesFiltered = this.favoritesAll;
    } else {
      this.favoritesAll.forEach(favorite => {
        let favoriteCategories = []
        favorite.genres.forEach(genre => {
          favoriteCategories.push(genre.name);
        });
        if (favoriteCategories.includes(this.selectedCategory)) {
          this.favoritesFiltered.push(favorite);
        }
      });
    }
  }

  refresh(ev) {
    this.favoritesAll = this.localdataSrv.favoriteMovies;
    this.filterByCategorie();
  }

}
