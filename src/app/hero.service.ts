import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

/* to get data from the server */
import { Observable, of } from 'rxjs';

@Injectable({
  //provider metadata, can create or deliver a service
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  /* asynchronous approach for requests from the server */
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    /* message sent when it fetches heroes */
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
