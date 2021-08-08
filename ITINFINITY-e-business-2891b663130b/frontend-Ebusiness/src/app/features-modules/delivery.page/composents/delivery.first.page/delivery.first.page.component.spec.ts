import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryFirstPageComponent } from './delivery.first.page.component';

describe('Delivery.First.PageComponent', () => {
  let component: DeliveryFirstPageComponent;
  let fixture: ComponentFixture<DeliveryFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryFirstPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
