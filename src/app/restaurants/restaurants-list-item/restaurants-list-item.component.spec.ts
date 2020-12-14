import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsListItemComponent } from './restaurants-list-item.component';

describe('RestaurantsListItemComponent', () => {
  let component: RestaurantsListItemComponent;
  let fixture: ComponentFixture<RestaurantsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
