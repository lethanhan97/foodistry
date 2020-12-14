import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants.model';

@Component({
  selector: 'app-restaurants-list-page',
  templateUrl: './restaurants-list-page.component.html',
  styleUrls: ['./restaurants-list-page.component.scss'],
})
export class RestaurantsListPageComponent implements OnInit {
  private restaurants: Restaurant[] = [];

  constructor() {}

  ngOnInit(): void {}
}
