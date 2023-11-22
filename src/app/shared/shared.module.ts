import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    SpinnerComponent    
  ],
  exports: [
    ButtonComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
