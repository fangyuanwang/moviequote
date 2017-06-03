import { Component } from '@angular/core';

interface MovieQuote {
  movie: string;
  quote: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieQuote: MovieQuote = {
    'movie': '',
    'quote': ''
  };

  onSubmit(): void {
    console.log("submit", this.movieQuote);
  }
}
