import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, LayoutComponent]
})
export class LayoutModule { }
