import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../model/hero';

@Injectable()
export class HeroesService {
  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    // private messagesService: MessagesService, 
    private httpClient: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('Fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.httpClient.get<Hero>(url)
      .pipe(
        tap(() => this.log(`Fetched hero: ${id}`)),
        catchError(this.handleError<Hero>(`getHero`))
      )
  }

  updateHero(hero: Hero): Observable<any> {
    return this.httpClient.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(() => this.log(`Updated hero: ${hero.id}`)),
        catchError(this.handleError<Hero>('updateHero'))
      );
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((hero: Hero) => this.log(`Created hero: ${hero.id}`)),
        catchError(this.handleError<Hero>('createHero'))
      )
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    let id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.httpClient.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap(() => this.log(`Deleted hero: ${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      )
  }

  searchHeroes(name: string): Observable<Hero[]> {
    if (!name.trim()) return of([]);

    const url = `${this.heroesUrl}/?name=${name}`;

    return this.httpClient.get<Hero[]>(url)
      .pipe(
        tap(() => this.log(`Founding heroes matching to '${name}'`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
  }

  private log(message: string) {
    console.log(message);
    // this.messagesService.add(message);
  }

  private handleError<T>(operation = 'Operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.body.error}`);

      return of(result as T);
    }
  }
}