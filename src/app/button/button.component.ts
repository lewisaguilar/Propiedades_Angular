import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color': color}"> {{label}} </button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() color!: string;
  @Input() label!: string;
}
