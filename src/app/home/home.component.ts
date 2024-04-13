import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  name='Dominicode'
  selection!: string;
  criteria =""; 

  addNewCity(city: string): void {
    this.cities.push(city);
  }



  onCityClicked(city:string): void{
    this.selection=city;

  }

  onClear(): void{
    this.selection= "";

  }  

}
