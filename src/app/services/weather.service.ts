import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private httpClient: HttpClient){}

  private api_key = '0a7ce0c5f8f9e22dbaea9b5bec65df69';
  private api_url = 'https://api.openweathermap.org';

  getLatLon(city: string){
    const encodedCity = encodeURIComponent(city);

    // 🔥 usando find (retorna lista)
    let url = `${this.api_url}/data/2.5/find?q=${encodedCity}&type=like&units=metric&appid=${this.api_key}`;

    return this.httpClient.get(url);
  }

  getWeatherByCoords(lat: number, lon: number){
    let url = `${this.api_url}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt&appid=${this.api_key}`;

    return this.httpClient.get(url);
  }
}