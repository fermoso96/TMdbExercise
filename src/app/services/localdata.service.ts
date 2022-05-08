import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { MovieDetail } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  private _storage: Storage | null = null;

  public favoriteMovies: MovieDetail[] = [];

  public categories: string[] = ['all'];

  constructor(private storage: Storage) {
    this.init();
  }


  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    // preload data
    this.getLocalData();
  }

  async getLocalData() {
    try {
      const movies = await this._storage.get('favoriteMovies');
      this.favoriteMovies = movies || [];
    } catch (error) {

    }
    this.getCategories();
  }

  getCategories() {
    this.categories = ['all'];
    this.favoriteMovies.forEach(favorite => {
      favorite.genres.forEach(genre => {
        if (!this.categories.includes(genre.name)) {
          this.categories.push(genre.name);
        }
      });
    });
  }

  get getMovies(): MovieDetail[] {
    return [... this.favoriteMovies];
  }

  async saveRemoveMovie(movie: MovieDetail) {
    const exist = this.favoriteMovies.find(localMovie => localMovie.id === movie.id);
    if (exist) {
      // DELETE
      this.favoriteMovies = this.favoriteMovies.filter(localMovie => localMovie.id !== movie.id);
    } else {
      // ADD
      this.favoriteMovies = [movie, ...this.favoriteMovies]
    }
    // SAVE MOVIES
    this._storage.set('favoriteMovies', this.favoriteMovies);
    this.getCategories();
  }

  checkMovie(movie: MovieDetail): boolean {

    const exist = this.favoriteMovies.find(localMovie => localMovie.id === movie.id);

    if (exist) {
      return true;
    }
    return false;
  }

  exportLocalMovies() {
    return this.favoriteMovies;
  }
}
