import { Injectable } from '@angular/core';
import { Restaurant } from './restaurants.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private data: Restaurant[] = [
    // Jap
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

    // Korean
    {
      id: 4,
      name: 'Mukshidona',
      coords: {
        lat: 1.3774030850369399,
        long: 103.95500438373185,
      },
      cuisine: 'Korean',
    },
    {
      id: 5,
      name: 'NY Night Market',
      coords: {
        lat: 1.3008387204761935,
        long: 103.83985506839066,
      },
      cuisine: 'Korean',
    },
    {
      id: 6,
      name: 'Massizim',
      coords: {
        lat: 1.3016290768192749,
        long: 103.83814882606116,
      },
      cuisine: 'Korean',
    },

    // Coffee & Dessert
    {
      id: 7,
      name: 'Kreams Kraft house',
      coords: {
        lat: 1.2777380224394712,
        long: 103.84629853955533,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: 8,
      name: 'Cafe de Nichole’s Flower',
      coords: {
        lat: 1.3117139455651794,
        long: 103.91080296654353,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: 9,
      name: 'In the brickyard',
      coords: {
        lat: 1.306030041881617,
        long: 103.86528884140236,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: 10,
      name: 'Twisted Trio',
      coords: {
        lat: 1.3365854210405321,
        long: 103.84725093770824,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: 11,
      name: 'Keong Saik Bakery',
      coords: {
        lat: 1.2801680722333733,
        long: 103.84140452315374,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: 12,
      name: "Moment's Bistro",
      coords: {
        lat: 1.351225975198002,
        long: 103.86927209204705,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: 13,
      name: 'Simple Cafe',
      coords: {
        lat: 1.316678367102027,
        long: 103.75733212421412,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: 14,
      name: 'Tittle Tattle',
      coords: {
        lat: 1.303974702616624,
        long: 103.85002246839056,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: 15,
      name: 'Breadyard',
      coords: {
        lat: 1.3001972205311743,
        long: 103.78778514140232,
      },
      cuisine: 'Coffee & Dessert',
    },
  ];

  constructor() {}

  getAllRestaurants(): Restaurant[] {
    return this.data;
  }
}
