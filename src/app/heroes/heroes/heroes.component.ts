import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hero } from '../model/hero';
import { HeroesService } from './heroes.service';
import { GetHero } from '../store/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  heroesStore: Observable<Hero[]>;

  constructor(private heroesService: HeroesService, private store: Store<{ heroes: Hero[] }>) { }

  ngOnInit() {
    this.store.dispatch(new GetHero());
    this.heroesStore = this.store.select('heroes');
    // this.store.select('heroes').subscribe((heroesState) => {
    //   console.log(heroesState);
    // });
    // this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onAdd(name: string): void {
    name = name.trim();
    if (!name) return;

    this.heroesService.createHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  onDelete(hero: Hero): void {
    this.heroes.splice(this.heroes.findIndex(h => h.id === hero.id), 1);
    // this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesService.deleteHero(hero)
      .subscribe();
  }
}
