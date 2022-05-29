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

  /* exposing heroes array */
  heroes: Hero[] = [];

  /* sets the heroService parameter to the singleton instance of HeroService */
  constructor(private heroService: HeroService) { }

  /* for initialization logic */
  ngOnInit(): void {
    this.getHeroes();
  }

  /* retrieve the heroes from the service */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }  
}
