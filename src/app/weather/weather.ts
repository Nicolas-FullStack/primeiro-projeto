import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.css'],
})
export class WeatherComponent {

  locationsForm: any;

  weatherData: any;
  locations: any[] = [];
  selectedLocation: any;

  constructor(
    private builder: FormBuilder,
    private weatherService: WeatherService
  ) {

    this.locationsForm = this.builder.group({
      city: ['', Validators.required]
    });

  }

  obterRegioes() {

    let city = this.locationsForm.value.city;

    if (!city) return;

    city = city.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    this.weatherService.getLatLon(city).subscribe({
      next: (data: any) => {
        console.log("CIDADES:", data);

        // garante array
        this.locations = data.list || [data];
      },
      error: (err) => {
        console.log("ERRO:", err);
      }
    });
  }

  obterClima(location: any) {

    this.selectedLocation = location;

    this.weatherService
      .getWeatherByCoords(location.coord.lat, location.coord.lon)
      .subscribe({
        next: (data: any) => {
          this.weatherData = data;
          console.log("CLIMA:", data);
        },
        error: (err) => {
          console.log("ERRO CLIMA:", err);
        }
      });
  }
}