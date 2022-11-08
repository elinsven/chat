import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInGQL } from '../../graphql/auth.generated';
import { SignInResult } from "../../../../../.generated/graphql/types";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private signInGQL: SignInGQL, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", Validators.required)
    })
  }

  submit(formValue: any) {
    this.signInGQL.mutate({ email: formValue.email, password: formValue.password }).subscribe((result: any) => {
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
    })
  }
}
