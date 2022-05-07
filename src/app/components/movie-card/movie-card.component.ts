import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie = null;

  hide = 350;
  favortie = false;

  constructor() { }

  ngOnInit() {
    console.log(this.movie);
  }

}
