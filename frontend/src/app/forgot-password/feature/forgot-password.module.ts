import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnderConstructionModule } from 'src/app/shared/ui/under-construction/under-construction.module';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

@NgModule({
  declarations: [ForgotPasswordPageComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    UnderConstructionModule
  ],
  exports: [ForgotPasswordPageComponent]
})
export class ForgotPasswordModule { }