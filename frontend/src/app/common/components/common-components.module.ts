import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { DividerComponent } from './divider/divider.component';
import { ErrorComponent } from './error/error.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DividerComponent,
    ErrorComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    DividerComponent,
    ErrorComponent,
    InputComponent
  ]
})
export class CommonComponentsModule { }
