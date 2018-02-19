import { Action } from '@ngrx/store';

import { Hero } from '../model/hero';

export const HeroesType = {
  GET_HERO: 'GET_HERO',
  GET_HERO_SUCCESS: 'GET_HERO_SUCCESS',
  ADD_HERO: 'ADD_HERO',
  ADD_HERO_SUCCESS: 'ADD_HERO_SUCCESS',
  DELETE_HERO: 'DELETE_HERO',
  DELETE_HERO_SUCCESS: 'DELETE_HERO_SUCCESS',
  UPDATE_HERO: 'UPDATE_HERO',
  UPDATE_HERO_SUCCESS: 'UPDATE_HERO_SUCCESS',
}

export class GetHero implements Action {
  readonly type = HeroesType.GET_HERO;

  constructor(public payload: any = null) { }
}
export class GetHeroSuccess implements Action {
  readonly type = HeroesType.GET_HERO_SUCCESS;

  constructor(public payload: Hero[]) { }
}

export class AddHero implements Action {
  readonly type = HeroesType.ADD_HERO;

  constructor(public payload: any = null) { }
}

export class AddHeroSuccess implements Action {
  readonly type = HeroesType.ADD_HERO_SUCCESS;

  constructor(public payload: Hero) { }
}

export class UpdateHero implements Action {
  readonly type = HeroesType.UPDATE_HERO;

  constructor(public payload: any = null) { }
}

export class UpdateHeroSuccess implements Action {
  readonly type = HeroesType.UPDATE_HERO_SUCCESS;

  constructor(public payload: Hero) { }
}

export class DeleteHero implements Action {
  readonly type = HeroesType.DELETE_HERO;

  constructor(public payload: any = null) { }
}

export class DeleteHeroSuccess implements Action {
  readonly type = HeroesType.DELETE_HERO_SUCCESS;

  constructor(public payload: number) { }
}

export type HeroesActions =
  AddHero
  | AddHeroSuccess
  | UpdateHero
  | UpdateHeroSuccess
  | GetHero
  | GetHeroSuccess
  | DeleteHero
  | DeleteHeroSuccess;