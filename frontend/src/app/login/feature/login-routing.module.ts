import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedInGuard } from "../../shared/data-access/logged-in.guard";
import { LoginComponent } from "./login.page.component";

const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }