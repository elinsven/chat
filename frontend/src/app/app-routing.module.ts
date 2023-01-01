import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./shared/data-access/auth.guard";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: "", component: TestComponent, canActivate: [AuthGuard] },
  {
    path: "login",
    loadChildren: () => import("./login/feature/login.module").then(m => m.LoginModule)
  },
  {
    path: "register",
    loadChildren: () => import("./register/feature/register.module").then(m => m.RegisterModule)
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
