import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { City } from '../city';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  cityData: City;


  constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpService) { }

  ngOnInit() {
    this._http.getWeather('San jose').subscribe(data => this.cityData = data);
  }

}
