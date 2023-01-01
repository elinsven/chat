import { Component, Input } from "@angular/core";
import { Color } from "../../utils/color";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  @Input() buttonText: string;
  @Input() buttonIcon: string;
  @Input() type: "submit" | "reset" | "button" = "submit";
  @Input() color: Color = "primary";
  @Input() appearance: "flat" | "stroked" = "flat";
  @Input() isDisabled: boolean = false;
}