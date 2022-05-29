import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /* URL to web api */
  private heroesUrl = 'api/heroes';
  
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /* get heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
    /* throw new Error('Method not implemented.'); */
  }
}
