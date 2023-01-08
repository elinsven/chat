import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedInGuard } from "src/app/shared/data-access/logged-in.guard";
import { ForgotPasswordComponent } from "./forgot-password.page.component";

const routes: Routes = [
  { path: "", component: ForgotPasswordComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswordRoutingModule { }