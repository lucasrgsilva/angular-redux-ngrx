import { Action } from '@ngrx/store';

import { HeroesActions, HeroesType } from './heroes.actions';
import { Hero } from '../model/hero';

const initialState: Hero[] = [];

export function heroesReducer(state = initialState, action: HeroesActions) {
  switch (action.type) {
    case HeroesType.GET_HERO_SUCCESS:
      return [
        ...action.payload
      ];
    case HeroesType.ADD_HERO_SUCCESS:
      return [
        action.payload,
        ...state,
      ];
    case HeroesType.UPDATE_HERO_SUCCESS:
      return state.map(hero =>
        hero.id !== action.payload.id ? hero : action.payload
      );
    case HeroesType.DELETE_HERO_SUCCESS:
      return state.filter(hero =>
        hero.id !== action.payload
      );
    default:
      return state;
  }
}