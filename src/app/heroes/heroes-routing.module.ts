import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

const routes: Routes = [
  { path: '', component: HeroesListComponent },
  { path: ':id', component: HeroesDetailComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
