import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { heroesReducer } from './heroes/store/heroes.reducer';
import { HeroesEffects } from './heroes/store/heroes.effects';
import { HeroesService } from './heroes/heroes/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      heroes: heroesReducer
    }),
    EffectsModule.forRoot([]),
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
