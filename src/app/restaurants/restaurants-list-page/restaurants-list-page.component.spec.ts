import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsListPageComponent } from './restaurants-list-page.component';

describe('RestaurantsListPageComponent', () => {
  let component: RestaurantsListPageComponent;
  let fixture: ComponentFixture<RestaurantsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
