import { SignInResult } from ".generated/graphql/types";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserFormLink, UserFormResult } from "src/app/shared/utils/userForm";
import { SignInGQL } from "../data-access/sign-in.generated";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.component.html",
  styleUrls: ["./login.page.component.scss"]
})
export class LoginComponent {
  links: UserFormLink[] = [
    {
      path: "/",
      textInsideAnchor: "Forgot password?"
    },
    {
      path: "/register",
      textInsideAnchor: "Register",
      textLeftAnchor: "No account?"
    }
  ];

  constructor(private signInGQL: SignInGQL, private router: Router) { }

  submit(formResult: UserFormResult) {
    console.log(formResult);
    /* this.signInGQL.mutate({ email: formValue.email, password: formValue.password }).subscribe((result: any) => {
      console.log(result);
      switch (result.data.signIn?.__typename as SignInResult["__typename"]) {
        case "CurrentUser":
          const token = result.data.signIn?.token;
          sessionStorage.setItem("token", token);
          this.router.navigate(["/"])
          break;
        case "IncorrectCredentialsError":
        case "IncorrectPasswordError":
          console.log(result.data.signIn?.message);
          break;
        default:
          console.error("Unexpected error occurred while signing in.");
      }
    }, error => {
      console.error("Unexpected error occurred while signing in.", error);
    }) */
  }
}