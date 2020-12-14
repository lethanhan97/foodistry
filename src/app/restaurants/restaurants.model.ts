export interface Restaurant {
  id: number;
  name: string;
  coords: Coords;
  cuisine: Cuisine;
}

export interface Coords {
  lat: string;
  long: string;
}

export type Cuisine =
  | 'Japanese'
  | 'Korean'
  | 'Coffee & Dessert'
  | 'Brunch Cafe'
  | 'Western'
  | 'Chinese'
  | 'European';
