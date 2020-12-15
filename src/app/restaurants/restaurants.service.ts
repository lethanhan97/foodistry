import { Injectable } from '@angular/core';
import { Restaurant } from './restaurants.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private data: Restaurant[] = [
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

  constructor() {}

  getAllRestaurants(): Restaurant[] {
    return this.data;
  }
}
