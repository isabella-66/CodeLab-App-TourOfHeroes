import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component ({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  /* exposing heroes array */
  heroes: Hero[] = [];

  selectedHero?: Hero;

  /* sets the heroService parameter to the singleton instance of HeroService */
  constructor(private heroService: HeroService) { }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  /* retrieve the heroes from the service */
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  /* for initialization logic */
  ngOnInit(): void {
    this.getHeroes();
  }
}
