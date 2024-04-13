import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `<ul>
             <li  (click)="onCityClicked(city)"
             [ngClass]="{'alert alert-info': city === selection}">
             {{city | titlecase}}
             </li>
             </ul>`,
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  @Input() city! : string;
  @Input() selection! : string;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city: string): void {
    // emit
    this.cityClickedEvent.emit(city);
  }


  ngOnInit(): void {
    

  }

}
