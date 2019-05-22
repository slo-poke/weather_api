import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { City } from '../city';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-boise',
  templateUrl: './boise.component.html',
  styleUrls: ['./boise.component.css']
})
export class BoiseComponent implements OnInit {
  cityData: City;


  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpService) {}

  ngOnInit() {
    this._http.getWeather('Boise').subscribe(data => this.cityData = data);
  }

}
