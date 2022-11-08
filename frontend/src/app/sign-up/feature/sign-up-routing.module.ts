import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedInGuard } from '../../shared/data-access/signed-in.guard';
import { SignUpPageComponent } from './sign-up-page.component';

const routes: Routes = [
  { path: "", component: SignUpPageComponent, canActivate: [SignedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }