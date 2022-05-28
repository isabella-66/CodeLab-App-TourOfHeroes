import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/* to get data from the server */
import { Observable, of } from 'rxjs';

@Injectable({
  //provider metadata, can create or deliver a service
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  /* asynchronous approach for requests from the server */
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
