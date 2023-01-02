import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.page.component";
import { LoginRoutingModule } from "./login-routing.module";
import { UserFormModule } from "src/app/shared/ui/user-form/user-form.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UserFormModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }