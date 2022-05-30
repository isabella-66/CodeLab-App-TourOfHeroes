import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const heroes = [
      { id: 12, name: 'Willem Arondeus'},
      { id: 13, name: 'Theresa Kachindamoto' },
      { id: 14, name: 'Aitzaz Hasan' },
      { id: 15, name: 'Charles Lightoller' },
      { id: 16, name: 'Heley de Abreu' },
      { id: 17, name: 'Mahatma Ghandi' },
      { id: 18, name: 'Nelson Mandela' },
      { id: 19, name: 'Martin Luther King Jr' },
      { id: 20, name: 'Malala Yousafzai' }
    ];
    return {heroes};
  }

  /* ensure that a hero always has an id */
  genId(heroes: Hero[]): number {
    /* if heroes array is empty */
    return heroes.length > 0 ?
    /* no, the method below returns the highest hero (id + 1) */
    Math.max(...heroes.map(hero => hero.id)) + 1 
    /* yes, the method below returns the initial number (11)*/
    : 11;
  }

  constructor() { }
}
