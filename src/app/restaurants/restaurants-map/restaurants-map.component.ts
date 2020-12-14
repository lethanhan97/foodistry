import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-restaurants-map',
  templateUrl: './restaurants-map.component.html',
  styleUrls: ['./restaurants-map.component.scss'],
})
export class RestaurantsMapComponent implements OnInit, AfterViewInit {
  map: L.Map | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [1.3521, 103.8198],
      zoom: 15,
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
