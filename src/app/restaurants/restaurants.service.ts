import { Injectable } from '@angular/core';
import { Restaurant } from './restaurants.model';
import { v4 as uuidv4, v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private data: Restaurant[] = [
    // Jap
    {
      id: v4(),
      name: 'Hokkaido Ya',
      coords: {
        lat: 1.2647429224316011,
        long: 103.82143514603271,
      },
      cuisine: 'Japanese',
    },
    {
      id: v4(),
      name: 'The Feather Blade',
      coords: {
        lat: 1.2820823574323867,
        long: 103.84560301323405,
      },
      cuisine: 'Japanese',
    },
    {
      id: v4(),
      name: 'Hamburg Steak Keisuke',
      coords: {
        lat: 1.2776690579708287,
        long: 103.84474245556184,
      },
      cuisine: 'Japanese',
    },

    // Korean
    {
      id: v4(),
      name: 'Mukshidona',
      coords: {
        lat: 1.3774030850369399,
        long: 103.95500438373185,
      },
      cuisine: 'Korean',
    },
    {
      id: v4(),
      name: 'NY Night Market',
      coords: {
        lat: 1.3008387204761935,
        long: 103.83985506839066,
      },
      cuisine: 'Korean',
    },
    {
      id: v4(),
      name: 'Massizim',
      coords: {
        lat: 1.3016290768192749,
        long: 103.83814882606116,
      },
      cuisine: 'Korean',
    },
    {
      id: v4(),
      name: 'Banshik Korean Cafe',
      coords: {
        lat: 1.372556263800443,
        long: 103.84772508465882,
      },
      cuisine: 'Korean',
    },

    // Coffee & Dessert
    {
      id: v4(),
      name: 'Kreams Kraft house',
      coords: {
        lat: 1.2777380224394712,
        long: 103.84629853955533,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'Cafe de Nichole’s Flower',
      coords: {
        lat: 1.3117139455651794,
        long: 103.91080296654353,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'In the brickyard',
      coords: {
        lat: 1.306030041881617,
        long: 103.86528884140236,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'Twisted Trio',
      coords: {
        lat: 1.3365854210405321,
        long: 103.84725093770824,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'Keong Saik Bakery',
      coords: {
        lat: 1.2801680722333733,
        long: 103.84140452315374,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: "Moment's Bistro",
      coords: {
        lat: 1.351225975198002,
        long: 103.86927209204705,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'Simple Cafe',
      coords: {
        lat: 1.316678367102027,
        long: 103.75733212421412,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'Tittle Tattle',
      coords: {
        lat: 1.303974702616624,
        long: 103.85002246839056,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'Breadyard',
      coords: {
        lat: 1.3001972205311743,
        long: 103.78778514140232,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'Sunday folks',
      coords: {
        lat: 1.312062327701562,
        long: 103.7967679530494,
      },
      cuisine: 'Coffee & Dessert',
    },
    {
      id: v4(),
      name: 'Cake spade',
      coords: {
        lat: 1.2781242579153862,
        long: 103.84375383955525,
      },
      cuisine: 'Coffee & Dessert',
    },

    // Brunch Cafe
    {
      id: v4(),
      name: 'Tolido’s Espresso Nook',
      coords: {
        lat: 1.3048419504063045,
        long: 103.86083637023764,
      },
      cuisine: 'Brunch Cafe',
    },
    {
      id: v4(),
      name: 'Daizu Cafe',
      coords: {
        lat: 1.3155866492484554,
        long: 103.85349188373178,
      },
      cuisine: 'Brunch Cafe',
    },
    {
      id: v4(),
      name: 'Tolido’s Espresso Nook',
      coords: {
        lat: 1.3049384848881225,
        long: 103.86079345489645,
      },
      cuisine: 'Brunch Cafe',
    },
    {
      id: v4(),
      name: 'Lolas cafe',
      coords: {
        lat: 1.3617746344847659,
        long: 103.8860311990729,
      },
      cuisine: 'Brunch Cafe',
    },
    {
      id: v4(),
      name: 'Atlas Coffee House',
      coords: {
        lat: 1.323129396477362,
        long: 103.81197026839058,
      },
      cuisine: 'Brunch Cafe',
    },
    {
      id: v4(),
      name: 'The Providore',
      coords: {
        lat: 1.280682978684775,
        long: 103.84888990670359,
      },
      cuisine: 'Brunch Cafe',
    },
    {
      id: v4(),
      name: 'Populous coffee',
      coords: {
        lat: 1.2783856130558182,
        long: 103.84076088557872,
      },
      cuisine: 'Brunch Cafe',
    },
    {
      id: v4(),
      name: 'Tiong Hoe Coffee',
      coords: {
        lat: 1.2911208735321271,
        long: 103.80310889722591,
      },
      cuisine: 'Brunch Cafe',
    },

    // Western
    {
      id: v4(),
      name: 'Omakase Burger',
      coords: {
        lat: 1.3009177508268217,
        long: 103.8397903953789,
      },
      cuisine: 'Western',
    },
    {
      id: v4(),
      name: 'L’Entrecote: The Steak and Fries Bistro',
      coords: {
        lat: 1.2786915746892717,
        long: 103.84274429537874,
      },
      cuisine: 'Western',
    },
    {
      id: v4(),
      name: 'Two men bagel house',
      coords: {
        lat: 1.27914183389108,
        long: 103.84436367744298,
      },
      cuisine: 'Western',
    },
  ];

  constructor() {}

  getAllRestaurants(): Restaurant[] {
    return this.data;
  }
}
