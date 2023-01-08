import { CurrentUser, EmailAddressConflictError, RegisterResult } from ".generated/graphql/types";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserFormLink, UserFormResult } from "src/app/shared/utils/userForm";
import { RegisterGQL } from "../data-access/register.generated";

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

  constructor(
    private registerGQL: RegisterGQL, private router: Router
  ) { }

  submit(formResult: UserFormResult) {
    console.log(formResult);
    this.registerGQL.mutate({ email: formResult.email, password: formResult.password }).subscribe(({ data }) => {
      switch (data.register?.__typename as RegisterResult["__typename"]) {
        case "CurrentUser":
          const data1 = data.register as CurrentUser;
          const token = data1?.token;
          sessionStorage.setItem("token", token);
          this.router.navigate(["/"]);
          break;
        case "EmailAddressConflictError":
          const data2 = data.register as EmailAddressConflictError;
          console.log(data2?.message);
          break;
        default:
          console.log("Unexpected error occurred while register user.");
      }
    });
  }
}