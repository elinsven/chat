import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedInGuard } from 'src/app/shared/data-access/signed-in.guard';
import { SignInPageComponent } from './sign-in-page.component';

const routes: Routes = [
  { path: "", component: SignInPageComponent, canActivate: [SignedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
