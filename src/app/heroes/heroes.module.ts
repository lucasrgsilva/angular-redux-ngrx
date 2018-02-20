import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { EffectsModule } from '@ngrx/effects';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesEffects } from './store/heroes.effects';
import { HeroesService } from './services/heroes.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDialogComponent } from './hero-dialog/hero-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    EffectsModule.forFeature([HeroesEffects]),
  ],
  declarations: [
    HeroesComponent, 
    HeroDialogComponent
  ],
  providers: [
    HeroesService, 
  ],  
  entryComponents: [HeroDialogComponent]
})
export class HeroesModule { }
