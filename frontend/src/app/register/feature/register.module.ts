import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';
import { DividerModule } from 'src/app/shared/ui/divider/divider.module';
import { ErrorModule } from 'src/app/shared/ui/error/error.module';
import { InputModule } from 'src/app/shared/ui/input/input.module';
import { RegisterComponent } from "./register.page.component";
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    ErrorModule,
    FormsModule,
    InputModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }