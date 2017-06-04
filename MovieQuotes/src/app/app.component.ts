import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface MovieQuote {
  movie: string;
  quote: string;
  $key?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formMovieQuote: MovieQuote = {
    'movie': '',
    'quote': ''
  };

  // movieQuotes: MovieQuote[] = [
  //   {"movie": "Rocky", "quote": "Yo Adrian"},
  //   {"movie": "Terminator", "quote": "I'll be back"},
  //   {"movie": "Titanic", "quote": "I'm the king of the world!"},
  //   {"movie": "The Princess Bride", "quote": "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."}
  // ];

  movieQuotesStream: FirebaseListObservable<MovieQuote[]>;
  constructor(db: AngularFireDatabase) { 
    this.movieQuotesStream = db.list('/quotes');

  }

  onSubmit(): void {
    //local solution
    // this.movieQuotes.unshift(this.formMovieQuote);
    try {
      this.movieQuotesStream.push(this.formMovieQuote);

      this.formMovieQuote = {
        'movie': '',
        'quote': ''
      };
    } catch (e) {
      console.log("Form error");
    }
  }
}
