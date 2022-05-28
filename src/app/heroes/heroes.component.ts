import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component ({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  //exposing heroes array
  heroes = HEROES;

  selectedHero?: Hero;

  constructor() { }

  /* for initialization logic */
  ngOnInit(): void {
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

}
