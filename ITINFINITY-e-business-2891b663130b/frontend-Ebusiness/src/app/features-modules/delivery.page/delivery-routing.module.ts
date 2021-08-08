import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryHomeComponent } from './composents/delivery.home/delivery.home.component';
import { DeliveryPointDeliveryComponent } from './composents/delivery.point.delivery/delivery.point.delivery.component';
import { DeliveryPointSellerComponent } from './composents/delivery.point.seller/delivery.point.seller.component';
import { DeliveryFirstPageComponent } from './composents/delivery.first.page/delivery.first.page.component';

const routes: Routes = [
  {
     path: '',
     component: DeliveryFirstPageComponent,
  },
  
  {
    path: 'Home',
    component: DeliveryHomeComponent,
  },
  {
    path: 'DeliveryPoint',
    component: DeliveryPointDeliveryComponent,
  },
  {
    path: 'DeliveryPointSeller',
    component: DeliveryPointSellerComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule {}
