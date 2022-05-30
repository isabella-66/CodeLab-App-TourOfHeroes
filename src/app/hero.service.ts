import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

/* to get data from the server */
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /* get heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
          .pipe(
            tap(_ => this.log('fetched heroes')),
            /* handleError() reports the error and returns an innocuous result  */
            catchError(this.handleError<Hero[]>('getHeroes', []))
          );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)), 
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /* PUT: update the hero and save the changes */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /* CREATE: add a new hero */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /* @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);

      /* let the app keep running by returning an empty result */
      return of(result as T);
    };
  }
}
