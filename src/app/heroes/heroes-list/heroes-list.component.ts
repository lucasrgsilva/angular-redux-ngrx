import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hero } from '../model/hero';
import { GetHero, AddHero, DeleteHero, UpdateHero } from '../store/heroes.actions';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HeroesService } from '../services/heroes.service';
import { HeroesDetailComponent } from '../heroes-detail/heroes-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  heroesStore: Observable<Hero[]>;

  constructor(
    private heroesService: HeroesService,
    private store: Store<{ heroes: Hero[] }>,
    public dialog: MatDialog
  ) { }

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

  openDialog(hero): void {
    let dialogRef = this.dialog.open(HeroesDetailComponent, {
      width: '400px',
      data: hero
    });

    dialogRef.afterClosed().subscribe(heroUpdated => {
      this.store.dispatch(new UpdateHero(heroUpdated));
    });
  }
}
