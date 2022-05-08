import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { environment } from '../../environments/environment';
import { MovieCredits, MovieDetail, MoviesByCast, MoviesObject, PersonDetail } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularsPage = 0;

  API_URL = environment.api_url;
  apiKey = environment.api_key;
  TODAY;
  MONTHAGO;

  searchResults = new BehaviorSubject<MoviesObject | false>(false);

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

  getMovieDetail(id: string) {
    return this.executeQuery<MovieDetail>(`movie/${id}`, {
      params: {}
    })
  }

  searchMovies(search: string) {
    return this.executeQuery<MoviesObject>(`search/movie`, {
      params: {
        'query': search,
      }
    })
  }

  getMovieCredits(id: string) {
    return this.executeQuery<MovieCredits>(`movie/${id}/credits`, {
      params: {}
    })
  }

  searchPerson(person: string) {
    return this.executeQuery<PersonDetail>(`search/person`, {
      params: {
        'query': person,
      }
    })
  }

  moviesByCast(person_id) {
    return this.executeQuery<MoviesByCast>(`person/${person_id}/movie_credits`, {
      params: {
        'sort_by': 'popularity.desc'
      }
    })
  }

}
