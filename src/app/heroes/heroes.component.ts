import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component ({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  /* exposing heroes array */
  heroes: Hero[] = [];

  /* sets the heroService parameter to the singleton instance of HeroService */
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  /* for initialization logic */
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  /* retrieve the heroes from the service */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  
}
