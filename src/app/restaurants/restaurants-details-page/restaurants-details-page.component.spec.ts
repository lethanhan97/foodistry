import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsDetailsPageComponent } from './restaurants-details-page.component';

describe('RestaurantsDetailsPageComponent', () => {
  let component: RestaurantsDetailsPageComponent;
  let fixture: ComponentFixture<RestaurantsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
