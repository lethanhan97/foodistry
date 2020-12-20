import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants.model';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants-list-page',
  templateUrl: './restaurants-list-page.component.html',
  styleUrls: ['./restaurants-list-page.component.scss'],
})
export class RestaurantsListPageComponent implements OnInit {
  restaurants: Restaurant[] = [];
  selectedRestaurant: Restaurant | undefined;

  constructor(private restaurantService: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getAllRestaurants();
  }

  onSelect(restaurant: Restaurant): void {
    if (this.isSelected(restaurant)) {
      this.selectedRestaurant = undefined;
    } else {
      this.selectedRestaurant = restaurant;
    }
  }

  reset(): void {
    this.selectedRestaurant = undefined;
  }

  isSelected(restaurant: Restaurant): boolean {
    if (!this.selectedRestaurant) return false;
    return restaurant.id === this.selectedRestaurant.id;
  }
}
