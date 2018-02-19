import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { HeroesType, GetHeroSuccess, AddHeroSuccess, HeroesActions, DeleteHeroSuccess } from './heroes.actions';
import { HeroesService } from '../heroes/heroes.service';

@Injectable()
export class HeroesEffects {
  constructor(private actions$: Actions, private heroesService: HeroesService) { }

  @Effect()
  getHeroes$ = this.actions$
    .ofType(HeroesType.GET_HERO)
    .switchMap(() =>
      this.heroesService.getHeroes()
        .map(heroes => new GetHeroSuccess(heroes))
    );

  @Effect()
  addHero$ = this.actions$
    .ofType(HeroesType.ADD_HERO)
    .switchMap((action: HeroesActions) =>
      this.heroesService.createHero(action.payload)
        .map(hero => new AddHeroSuccess(hero))
    );

  @Effect()
  deleteHero$ = this.actions$
    .ofType(HeroesType.DELETE_HERO)
    .switchMap((action: HeroesActions) =>
      this.heroesService.deleteHero(action.payload)
        .map(hero => new DeleteHeroSuccess(action.payload))
    );
}