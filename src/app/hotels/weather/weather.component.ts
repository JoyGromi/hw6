import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from 'src/app/intesfaces/IHotel';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input()
  public weather: IWeather;

  constructor() { }

  ngOnInit() {
  }
}
