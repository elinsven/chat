import { Component, Input, OnInit } from '@angular/core';
import { InputType } from '../../models/inputType';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() title: string;
  @Input() type: InputType;

  constructor() { }

  ngOnInit(): void {
  }

}
