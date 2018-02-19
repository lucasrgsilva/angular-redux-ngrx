import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesService } from './heroes/heroes.service';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './store/heroes.effects';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    EffectsModule.forFeature([HeroesEffects]),
  ],
  declarations: [HeroesComponent],
  providers: [HeroesService]
})
export class HeroesModule { }
