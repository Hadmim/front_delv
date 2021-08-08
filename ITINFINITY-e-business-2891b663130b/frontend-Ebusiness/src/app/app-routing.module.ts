/** Angular core dependencies */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentPageComponent } from './features-modules/payment.page/payment.page.component';
import { DeliveryPageComponent } from './features-modules/delivery.page/delivery.page.component';
const routes: Routes = [
 
  {
    path: 'payment',
    component: PaymentPageComponent,
  },
  {
  path: 'delivery',
    component: DeliveryPageComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
