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
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants-map',
  templateUrl: './restaurants-map.component.html',
  styleUrls: ['./restaurants-map.component.scss'],
})
export class RestaurantsMapComponent implements AfterViewInit, OnChanges {
  @Input() selectedRestaurant: Restaurant | undefined;
  map: L.Map;

  private currentMarkers: L.Marker[] = [];
  private allMarkers: L.Marker[] = [];
  private markerIcon: L.Icon = L.icon({
    iconUrl: marker,
    iconSize: [42, 42],
    iconAnchor: [15, 42],
  });

  constructor(private restaurantsService: RestaurantsService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.initAllMarkers();

    this.currentMarkers = this.allMarkers;
    this.addMarkersToMap(this.currentMarkers);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedRestaurant.currentValue) {
      // Zoom in on selected restaurant
      const { lat, long } = changes.selectedRestaurant.currentValue.coords;
      const coords: L.LatLng = new L.LatLng(lat, long);

      this.removeMarkersFromMap(this.currentMarkers);

      const markers = this.createMarkers([coords]); // array of 1 item because we only want to display 1
      this.currentMarkers = markers;
      this.addMarkersToMap(this.currentMarkers);
      this.map.setView(coords, 14);
    } else {
      // Display all restaurant markers
      this.removeMarkersFromMap(this.currentMarkers);
      this.currentMarkers = this.allMarkers;
      this.addMarkersToMap(this.currentMarkers);
      if (this.map) this.resetMapView();
    }
  }

  initAllMarkers(): void {
    const restaurants = this.restaurantsService.getAllRestaurants();
    const coords: L.LatLng[] = restaurants.map((restaurant) => {
      const { lat, long } = restaurant.coords;
      const currentCoord: L.LatLng = new L.LatLng(lat, long);

      return currentCoord;
    });

    const markers = this.createMarkers(coords);
    this.allMarkers = markers;
  }

  addMarkersToMap(markers: L.Marker[]): void {
    for (let marker of markers) {
      marker.addTo(this.map);
    }
  }

  removeMarkersFromMap(markers: L.Marker[]): void {
    for (let marker of markers) {
      this.map.removeLayer(marker);
    }
  }

  createMarkers(coords: L.LatLng[]): L.Marker[] {
    const result: L.Marker[] = [];

    for (let coord of coords) {
      let currentMarker = L.marker(coord, { icon: this.markerIcon });
      result.push(currentMarker);
    }

    return result;
  }

  resetMapView(): void {
    this.map.setView([1.3521, 103.8198], 12);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [1.3521, 103.8198],
      zoom: 12,
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
}
