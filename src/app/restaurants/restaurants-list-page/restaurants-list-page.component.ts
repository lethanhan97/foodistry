import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants.model';

@Component({
  selector: 'app-restaurants-list-page',
  templateUrl: './restaurants-list-page.component.html',
  styleUrls: ['./restaurants-list-page.component.scss'],
})
export class RestaurantsListPageComponent implements OnInit {
  restaurants: Restaurant[] = [];
  selectedRestaurant: Restaurant;

  constructor() {}

  ngOnInit(): void {
    // TODO Migrate to a service
    this.restaurants = [
      {
        id: 1,
        name: 'Hokkaido Ya',
        coords: {
          lat: 1.2647429224316011,
          long: 103.82143514603271,
        },
        cuisine: 'Japanese',
      },
      {
        id: 2,
        name: 'The Feather Blade',
        coords: {
          lat: 1.2820823574323867,
          long: 103.84560301323405,
        },
        cuisine: 'Japanese',
      },
      {
        id: 3,
        name: 'Hamburg Steak Keisuke',
        coords: {
          lat: 1.2776690579708287,
          long: 103.84474245556184,
        },
        cuisine: 'Japanese',
      },
    ];
  }

  onSelect(restaurant: Restaurant): void {
    this.selectedRestaurant = restaurant;
  }

  isSelected(restaurant: Restaurant): boolean {
    if (!this.selectedRestaurant) return false;
    return restaurant.id === this.selectedRestaurant.id;
  }
}
