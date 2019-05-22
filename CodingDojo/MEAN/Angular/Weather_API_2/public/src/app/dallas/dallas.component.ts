import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { City } from '../city';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  cityData: City;

 
  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpService) { }

  ngOnInit() {
    this._http.getWeather('Dallas').subscribe(data => this.cityData = data);
  }

}
