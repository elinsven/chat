import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedInGuard } from 'src/app/shared/data-access/signed-in.guard';
import { LoginComponent } from './login.page.component';

const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [SignedInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
