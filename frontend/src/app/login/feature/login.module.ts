import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';
import { DividerModule } from 'src/app/shared/ui/divider/divider.module';
import { InputModule } from 'src/app/shared/ui/input/input.module';
import { LoginComponent } from './login.page.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    InputModule,
    ReactiveFormsModule,
    RouterModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }