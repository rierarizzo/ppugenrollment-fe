import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NzDrawerModule,
    ReactiveFormsModule,
    FormsModule,
    NzDrawerModule,
    RouterModule
    
  ],
  declarations: [
    NavDrawerComponent,
    
  ],
  exports: [
    NavDrawerComponent
  ]
})
export class LayoutModule { }
