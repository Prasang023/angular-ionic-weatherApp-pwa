import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient ) {  }

  getWeatherData(): Observable<any> {
    let lat = 26.8467;
    let lon = 80.9462;
    let apiId = 'd04c3a52987ba593b01d657da94b390d';
    let queryString = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiId}&units=metric`;

    return this.http.get(queryString);
  }
}
