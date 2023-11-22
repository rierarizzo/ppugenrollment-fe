import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  declarations: [ButtonComponent, SpinnerComponent],
  exports: [
    ButtonComponent,
    SpinnerComponent,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
