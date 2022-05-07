import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MoviesObject } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularsPage = 0;

  API_URL = environment.api_url;
  apiKey = environment.api_key;
  TODAY;
  MONTHAGO;

  constructor(private http: HttpClient, private datePipe: DatePipe) {
    this.getDates(14);
  }

  getDates(daysLess) {
    this.TODAY = new Date();
    this.MONTHAGO = new Date();
    this.MONTHAGO.setDate(this.TODAY.getDate() - daysLess);
    this.TODAY = this.datePipe.transform(this.TODAY, 'yyyy-MM-dd');
    this.MONTHAGO = this.datePipe.transform(this.MONTHAGO, 'yyyy-MM-dd');
  }

  private executeQuery<T>(query: string, params = {}) {
    query = this.API_URL + query;
    query += `?api_key=${this.apiKey}&language=es&include_image_lenguage=es`;
    return this.http.get<T>(query, params);
  }

  getRecentMovies() {
    return this.executeQuery<MoviesObject>('discover/movie', {
      params: {
        'primary_release_date.gte': this.MONTHAGO,
        'primary_release_date.lte': this.TODAY
      }
    })
  }

  getPopularMovies() {
    this.popularsPage++;
    return this.executeQuery<MoviesObject>('discover/movie', {
      params: {
        'sort_by': 'popularity.desc',
        'page': this.popularsPage
      }
    })
  }

}
