import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    /* holds information about the route to this instance of the HeroDetailComponent */
    private route: ActivatedRoute,
    /* gets hero data from the remote server and use it to get the hero-to-display */
    private heroService: HeroService,
    /* use it to navigate back to the view that navigated */
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  /* SAVE changes */
  save(): void {
    if(this.hero) {
      this.heroService.updateHero(this.hero)
          .subscribe(() => this.goBack());
    }
  }
}
