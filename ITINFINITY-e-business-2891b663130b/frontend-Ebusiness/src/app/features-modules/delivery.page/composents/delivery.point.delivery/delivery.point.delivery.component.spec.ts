import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPointDeliveryComponent } from './delivery.point.delivery.component';

describe('Delivery.Point.DeliveryComponent', () => {
  let component: DeliveryPointDeliveryComponent;
  let fixture: ComponentFixture<DeliveryPointDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPointDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPointDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
