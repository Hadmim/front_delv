import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryPageComponent } from './delivery.page.component';
import { DeliveryFirstPageComponent } from './composents/delivery.first.page/delivery.first.page.component';
import { DeliveryHomeComponent } from './composents/delivery.home/delivery.home.component';
import { DeliveryPointDeliveryComponent } from './composents/delivery.point.delivery/delivery.point.delivery.component';
import { DeliveryPointSellerComponent } from './composents/delivery.point.seller/delivery.point.seller.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { AgmCoreModule } from '@agm/core'; 





@NgModule({
  declarations: [
    DeliveryPageComponent,
    DeliveryFirstPageComponent,
    DeliveryHomeComponent,
    DeliveryPointDeliveryComponent,
    DeliveryPointSellerComponent,
    
  ],
  imports: [
    CommonModule,
    NgbModule
   // AgmCoreModule.forRoot({
   //   apiKey: 'AIzaSyDxNZOxQbEl4VQmcYETchKoHAcXCC-AlpE'
    //})
    
  ],
  exports:[
  //  AgmCoreModule,
  DeliveryPageComponent,
    DeliveryFirstPageComponent,
    DeliveryHomeComponent,
    DeliveryPointDeliveryComponent,
    DeliveryPointSellerComponent,
  ], 

 schemas:[CUSTOM_ELEMENTS_SCHEMA]
  
})
export class DeliveryPageModule { }
