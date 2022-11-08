import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/data-access/auth.guard';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", component: TestComponent, canActivate: [AuthGuard] },
  {
    path: "sign-in",
    loadChildren: () => import("../app/sign-in/feature/sign-in.module").then(m => m.SignInModule)
  },
  {
    path: "sign-up",
    loadChildren: () => import("../app/sign-up/feature/sign-up.module").then(m => m.SignUpModule)
  },
  {
    path: "forgot-password",
    loadChildren: () => import("../app/forgot-password/feature/forgot-password.module").then(m => m.ForgotPasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
