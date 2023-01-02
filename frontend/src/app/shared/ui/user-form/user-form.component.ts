import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserFormLink, UserFormResult } from "../../utils/userForm";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})

export class UserFormComponent implements OnInit {
  @Input() header: string;
  @Input() submitButtonText: string;
  @Input() links: UserFormLink[] = [];
  @Output() submitForm = new EventEmitter<UserFormResult>();
  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", Validators.required)
    })
  }
}