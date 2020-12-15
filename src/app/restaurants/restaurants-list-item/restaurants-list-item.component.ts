import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from '../restaurants.model';

@Component({
  selector: 'app-restaurants-list-item',
  templateUrl: './restaurants-list-item.component.html',
  styleUrls: ['./restaurants-list-item.component.scss'],
})
export class RestaurantsListItemComponent implements OnInit {
  @Input() restaurant: Restaurant | undefined;
  @Input() selected: boolean = false;
  @Output() select: EventEmitter<Restaurant> = new EventEmitter<Restaurant>();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.select.emit(this.restaurant);
  }
}
