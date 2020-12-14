import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { Restaurant } from '../restaurants.model';

@Component({
  selector: 'app-restaurants-map',
  templateUrl: './restaurants-map.component.html',
  styleUrls: ['./restaurants-map.component.scss'],
})
export class RestaurantsMapComponent implements AfterViewInit {
  @Input() selectedRestaurant: Restaurant;
  map: L.Map;
  currentCoords: L.LatLng;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    this.getCurrentLocation();
  }

  private getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const coords: L.LatLng = new L.LatLng(latitude, longitude);

        this.currentCoords = coords;
        this.map.setView(coords, 14);
        this.addMarker(latitude, longitude);
      });
    } else {
      console.log('geolocation not available');
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [1.3521, 103.8198],
      zoom: 14,
    });

    const tiles = L.tileLayer(
      'https://maps-{s}.onemap.sg/v3/Original/{z}/{x}/{y}.png',
      {
        minZoom: 11,
        maxZoom: 18,
        bounds: [
          [1.56073, 104.11475],
          [1.16, 103.502],
        ],
        attribution:
          '<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>',
      }
    );

    tiles.addTo(this.map);
  }

  private addMarker(lat: number, long: number): void {
    const marker = L.circleMarker([lat, long]);
    marker.addTo(this.map);
  }
}
