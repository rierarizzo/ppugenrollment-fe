import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ButtonComponent, SpinnerComponent],
  exports: [
    ButtonComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class SharedModule {}
