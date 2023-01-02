import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserFormLink, UserFormResult } from "src/app/shared/utils/userForm";
import { SignUpGQL } from "../data-access/sign-up.generated";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.component.html",
  styleUrls: ["./register.page.component.scss"]
})
export class RegisterComponent {
  links: UserFormLink[] = [
    {
      path: "/login",
      textInsideAnchor: "Log in",
      textLeftAnchor: "Already registered?"
    }
  ];

  constructor(private signUpGQL: SignUpGQL, private router: Router) { }

  submit(formResult: UserFormResult) {
    console.log(formResult);
    /* this.signUpGQL.mutate({ email: formValue.email, password: formValue.password }).subscribe((result: any) => {
      console.log(result);
      const token = result.data.signUp?.token;
      sessionStorage.setItem("token", token);
      this.router.navigate(["/"]);
    }, error => {
      console.error("Unexpected error occurred while signing in.", error);
    })*/
  }
}