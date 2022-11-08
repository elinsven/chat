import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';
import { DividerModule } from 'src/app/shared/ui/divider/divider.module';
import { ErrorModule } from 'src/app/shared/ui/error/error.module';
import { InputModule } from 'src/app/shared/ui/input/input.module';
import { SignInPageComponent } from './sign-in-page.component';
import { SignInRoutingModule } from './sign-in-routing.module';

@NgModule({
  declarations: [SignInPageComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    ErrorModule,
    FormsModule,
    InputModule,
    ReactiveFormsModule,
    RouterModule,
    SignInRoutingModule
  ],
  exports: [SignInPageComponent]
})
export class SignInModule { }