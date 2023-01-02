import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserFormComponent } from "./user-form.component";
import { ButtonModule } from "../button/button.module";
import { DividerModule } from "../divider/divider.module";
import { InputModule } from "../input/input.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DividerModule,
    RouterModule,
    InputModule
  ],
  exports: [UserFormComponent]
})
export class UserFormModule { }