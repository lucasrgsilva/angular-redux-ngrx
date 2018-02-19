import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hero } from '../model/hero';
import { HeroesService } from './heroes.service';
import { GetHero, AddHero, DeleteHero } from '../store/heroes.actions';

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
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onAdd(name: string): void {
    name = name.trim();
    if (!name) return;

    this.store.dispatch(new AddHero({ name } as Hero));
  }

  onDelete(id: number): void {
    this.store.dispatch(new DeleteHero(id))
  }
}
