import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // Add data elements for your name, the title, year released, rating, and imdb link of your favorite movie
  myName = 'Grace Green';
   favFlop = {
     title: 'Fatale',
     yearReleased: 2020 ,
     rating: 5.7,
     imdbLink: 'https://www.imdb.com/title/tt8829830/?ref_=hm_inth_3',
     soundtrack: {
       spotifylink:"hello world"
     }
   }
}
