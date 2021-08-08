import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery.point.delivery',
  templateUrl: './delivery.point.delivery.component.html',
  styleUrls: ['./delivery.point.delivery.component.css']
})
export class DeliveryPointDeliveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lat =36.7525 ;
  long = 3.04197;

}
