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
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesService } from './services/heroes.service';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

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
    HeroesListComponent, 
    HeroesDetailComponent
  ],
  providers: [
    HeroesService, 
  ],  
  entryComponents: [HeroesDetailComponent]
})
export class HeroesModule { }
