import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /* adding a hero property */
  hero = 'Windstorm';

  constructor() { }

  /* for initialization logic */
  ngOnInit(): void {
  }

}
