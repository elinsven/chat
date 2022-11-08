import { Component, forwardRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '../../interfaces/inputType';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() title: string;
  @Input() type: InputType;
  @Input() form: FormGroup;
  @Input() formControlName: string;

  onChange: any = () => { };
  onTouched: any = () => { };
  value: any;

  @HostListener('input', ['$event']) public onKeyup(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
