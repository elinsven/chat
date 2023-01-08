import { LoginResult } from ".generated/graphql/types";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserFormLink, UserFormResult } from "src/app/shared/utils/userForm";
import { LoginGQL } from "../data-access/login.generated";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.component.html",
  styleUrls: ["./login.page.component.scss"]
})
export class LoginComponent {
  links: UserFormLink[] = [
    {
      path: "/forgot-password",
      textInsideAnchor: "Forgot password?"
    },
    {
      path: "/register",
      textInsideAnchor: "Register",
      textLeftAnchor: "No account?"
    }
  ];

  constructor(private loginGQL: LoginGQL, private router: Router) { }

  submit(formResult: UserFormResult) {
    console.log(formResult);
    this.loginGQL.mutate({ email: formResult.email, password: formResult.password }).subscribe((result: any) => {
      switch (result.data.login?.__typename as LoginResult["__typename"]) {
        case "CurrentUser":
          const token = result.data.login?.token;
          sessionStorage.setItem("token", token);
          this.router.navigate(["/"]);
          break;
        case "IncorrectCredentialsError":
          console.log(result.data.login?.message);
          break;
        default:
          console.log("Unexpected error occurred while signing in.");
      }
    });
  }
}