import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../models/color';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonTitle: string;
  @Input() color: Color = "primary";

  constructor() { }

  ngOnInit(): void {
  }

}