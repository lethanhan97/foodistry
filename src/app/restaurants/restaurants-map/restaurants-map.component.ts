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

  private currentMarkerCluster: L.MarkerClusterGroup;
  private allMarkerCluster: L.MarkerClusterGroup;
  private markerIcon: L.Icon = L.icon({
    iconUrl: marker,
    iconSize: [42, 42],
    iconAnchor: [15, 42],
  });

  constructor(private restaurantsService: RestaurantsService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.initAllMarkers();

    this.currentMarkerCluster = this.allMarkerCluster;
    this.allMarkerCluster.addTo(this.map);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedRestaurant.currentValue) {
      // Zoom in on selected restaurant
      const { lat, long } = changes.selectedRestaurant.currentValue.coords;
      const coords: L.LatLng = new L.LatLng(lat, long);

      this.addMarker([coords]); // array of 1 item because we only want to display 1
      this.map.setView(coords, 14);
    } else {
      // Display all restaurant markers
      if (this.currentMarkerCluster) {
        this.map.removeLayer(this.currentMarkerCluster);
      }

      if (this.allMarkerCluster) {
        this.currentMarkerCluster = this.allMarkerCluster;
        this.allMarkerCluster.addTo(this.map);
      }
    }
  }

  initAllMarkers(): void {
    const restaurants = this.restaurantsService.getAllRestaurants();
    const markerCluster = L.markerClusterGroup();

    for (let restaurant of restaurants) {
      const { lat, long } = restaurant.coords;
      const coords: L.LatLng = new L.LatLng(lat, long);

      let marker = L.marker(coords, { icon: this.markerIcon });
      markerCluster.addLayer(marker);
    }

    console.log(markerCluster.getAllChildMarkers());
    this.allMarkerCluster = markerCluster;
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

  private addMarker(coords: L.LatLng[]): void {
    if (this.currentMarkerCluster) {
      this.map.removeLayer(this.currentMarkerCluster);
    }

    const markerCluster = L.markerClusterGroup();
    for (let coord of coords) {
      let marker = L.marker(coord, { icon: this.markerIcon });
      markerCluster.addLayer(marker);
    }

    markerCluster.addTo(this.map);
    this.currentMarkerCluster = markerCluster;
  }
}
