import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpGQL } from '../data-access/sign-up.generated';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private signUpGQL: SignUpGQL, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = new FormGroup({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", Validators.required)
    })
  }

  submit(formValue: any) {
    this.signUpGQL.mutate({ username: formValue.username, email: formValue.email, password: formValue.password }).subscribe((result: any) => {
      console.log(result);
      const token = result.data.signUp?.token;
      sessionStorage.setItem("token", token);
      this.router.navigate(["/"]);
    }, error => {
      console.error("Unexpected error occurred while signing in.", error);
    })
  }

}
