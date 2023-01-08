import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedInGuard } from "../../shared/data-access/logged-in.guard";
import { RegisterComponent } from "./register.page.component";

const routes: Routes = [
  { path: "", component: RegisterComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }