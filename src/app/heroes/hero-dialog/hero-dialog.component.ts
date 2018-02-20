import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';

import { Hero } from '../model/hero';
import { UpdateHero } from '../store/heroes.actions';

@Component({
  selector: 'app-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.css']
})
export class HeroDialogComponent implements OnInit {
  hero: Hero;

  constructor(
    public thisDialogRef: MatDialogRef<HeroDialogComponent>,
    private store: Store<{ heroes: Hero[] }>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) { }

  ngOnInit() {
    this.hero = { ...this.data };
  }

  onCloseConfirm() {
    this.store.dispatch(new UpdateHero(this.hero));
    this.thisDialogRef.close('Confirm');
  }
  
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
