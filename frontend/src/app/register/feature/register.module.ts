import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.page.component";
import { RegisterRoutingModule } from "./register-routing.module";
import { UserFormModule } from "src/app/shared/ui/user-form/user-form.module";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    UserFormModule,
    RegisterRoutingModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }