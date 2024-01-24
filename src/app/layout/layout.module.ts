import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
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
    FooterComponent,
    
  ],
  exports: [
    NavDrawerComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
