import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants.model';

@Component({
  selector: 'app-restaurants-list-page',
  templateUrl: './restaurants-list-page.component.html',
  styleUrls: ['./restaurants-list-page.component.scss'],
})
export class RestaurantsListPageComponent implements OnInit {
  restaurants: Restaurant[] = [];
  selectedRestaurant: Restaurant | null = null;

  constructor() {}

  ngOnInit(): void {
    // TODO Migrate to a service
    this.restaurants = [
      {
        id: 1,
        name: 'Hokkaido Ya',
        coords: {
          lat: 0,
          long: 0,
        },
        cuisine: 'Japanese',
      },
      {
        id: 2,
        name: 'The Feather Blade',
        coords: {
          lat: 0,
          long: 0,
        },
        cuisine: 'Japanese',
      },
      {
        id: 3,
        name: 'Hamburg Keiseuke',
        coords: {
          lat: 0,
          long: 0,
        },
        cuisine: 'Japanese',
      },
    ];
  }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
    alert(`Selected restaurant is ${this.selectedRestaurant.name}`);
  }
}
