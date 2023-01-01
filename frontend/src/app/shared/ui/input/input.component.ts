import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, FormControl, FormControlStatus, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from "@angular/forms";
import { InputType } from "../../utils/inputType";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string = "";
  @Input() type: InputType = "text";
  @Input() formControlName: string;

  required: boolean = false;
  invalid: boolean = false;
  isTouched: boolean = false;
  error: boolean = false;
  errorLabel: string;
  value: any;

  change: any = () => { };
  touched: any = () => { };

  keyup(event: KeyboardEvent) {
    this.value = (event.target as HTMLInputElement).value;
    this.change(this.value);
  }

  blur() {
    this.markAsTouched();
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(change: any) {
    this.change = change;
  }

  registerOnTouched(touched: any) {
    this.touched = touched;
  }

  markAsTouched() {
    if (!this.isTouched && this.value) {
      this.touched();
      this.isTouched = true;
      if (this.invalid) {
        this.error = true;
      }
    }
  }

  validate(formControl: FormControl) {
    this.required = formControl.hasValidator(Validators.required);

    formControl.statusChanges.subscribe((status: FormControlStatus) => {
      if (status === "INVALID") {
        this.invalid = true;
        if (this.isTouched) {
          this.error = true;
        }
        this.setErrorLabel(formControl.errors);
      } else if (status === "VALID") {
        this.invalid = false;
        this.error = false;
        this.errorLabel = undefined;
      }
    })
  }

  setErrorLabel(errors: ValidationErrors) {
    Object.keys(errors).forEach(error => {
      switch (error) {
        case "email":
          this.errorLabel = "Invalid email address"
          break;
        case "required":
          this.errorLabel = "This field is required"
          break;
        default:
          this.errorLabel = "Invalid input"
      }
    })
  }
}
