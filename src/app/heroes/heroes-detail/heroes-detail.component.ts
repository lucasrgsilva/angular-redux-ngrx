import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    public thisDialogRef: MatDialogRef<HeroesDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
  ) { }

  ngOnInit() {
    this.hero = { ...this.data };
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
