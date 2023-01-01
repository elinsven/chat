import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedInGuard } from '../../shared/data-access/signed-in.guard';
import { RegisterComponent } from "./register.page.component";

const routes: Routes = [
  { path: "", component: RegisterComponent, canActivate: [SignedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }