import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { SignedInGuard } from './common/guards/signed-in.guard';
import { SignInPageComponent } from './auth/components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './auth/components/sign-up-page/sign-up-page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", component: TestComponent, canActivate: [AuthGuard] },
  { path: "sign-in", component: SignInPageComponent, canActivate: [SignedInGuard] },
  { path: "sign-up", component: SignUpPageComponent, canActivate: [SignedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
