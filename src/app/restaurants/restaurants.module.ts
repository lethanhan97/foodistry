import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RestaurantsListPageComponent } from './restaurants-list-page/restaurants-list-page.component';
import { RestaurantsListItemComponent } from './restaurants-list-item/restaurants-list-item.component';

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RestaurantsListPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [RestaurantsListPageComponent, RestaurantsListItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RestaurantsModule {}
