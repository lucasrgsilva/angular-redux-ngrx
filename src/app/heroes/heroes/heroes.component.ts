import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hero } from '../model/hero';
import { GetHero, AddHero, DeleteHero, UpdateHero } from '../store/heroes.actions';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HeroesService } from '../services/heroes.service';
import { HeroDialogComponent } from '../hero-dialog/hero-dialog.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroesStore: Observable<Hero[]>;

  constructor(
    private heroesService: HeroesService,
    private store: Store<{ heroes: Hero[] }>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetHero());
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesStore = this.store.select('heroes');
  }

  onAdd(name: string): void {
    name = name.trim();
    if (!name) return;

    this.store.dispatch(new AddHero({ name } as Hero));
  }

  onDelete(id: number): void {
    this.store.dispatch(new DeleteHero(id))
  }

  openDialog(hero): void {
    this.dialog.open(HeroDialogComponent, {
      width: '400px',
      data: hero
    });
  }
}
