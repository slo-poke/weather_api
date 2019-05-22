import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // currentCity: City;

  constructor(private _http: HttpClient) { }

  getWeather(city: string): Observable<City> {
// tslint:disable-next-line: max-line-length
    const observable = this._http.get<City>('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=3cd05c3b93150237bc96811ac7c659cd');
    
    return observable;
  }
}
