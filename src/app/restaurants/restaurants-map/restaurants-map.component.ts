import {
  Component,
  AfterViewInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { Restaurant } from '../restaurants.model';
import marker from '../../../assets/marker.svg';

@Component({
  selector: 'app-restaurants-map',
  templateUrl: './restaurants-map.component.html',
  styleUrls: ['./restaurants-map.component.scss'],
})
export class RestaurantsMapComponent implements AfterViewInit, OnChanges {
  @Input() selectedRestaurant: Restaurant;
  map: L.Map;
  currentCoords: L.LatLng;
  currentMarkerCluster: L.MarkerClusterGroup;
  markerIcon: L.Icon = L.icon({
    iconUrl: marker,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    this.getCurrentLocation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedRestaurant.currentValue) {
      // Zoom in on selected restaurant
      const { lat, long } = changes.selectedRestaurant.currentValue.coords;
      const coords: L.LatLng = new L.LatLng(lat, long);

      this.addMarker(lat, long, 'point');
      this.map.setView(coords, 14);
    } else {
      // Display all restaurant markers
    }
  }

  private getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const coords: L.LatLng = new L.LatLng(latitude, longitude);

        this.currentCoords = coords;
        this.map.setView(coords, 14);
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

  private addMarker(lat: number, long: number, type: 'circle' | 'point'): void {
    var markerCluster = L.markerClusterGroup();

    if (this.currentMarkerCluster) {
      this.map.removeLayer(this.currentMarkerCluster);
    }

    let marker;
    if (type === 'circle') {
      marker = L.circleMarker([lat, long]);
    } else {
      marker = L.marker([lat, long], { icon: this.markerIcon });
    }

    markerCluster.addLayer(marker);
    markerCluster.addTo(this.map);

    this.currentMarkerCluster = markerCluster;
  }
}
