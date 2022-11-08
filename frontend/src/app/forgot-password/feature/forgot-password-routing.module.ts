import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedInGuard } from 'src/app/shared/data-access/signed-in.guard';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';

const routes: Routes = [
  { path: "", component: ForgotPasswordPageComponent, canActivate: [SignedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }