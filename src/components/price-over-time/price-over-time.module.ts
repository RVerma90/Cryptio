import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PriceOverTime } from './price-over-time';

@NgModule({
  declarations: [
    PriceOverTime,
  ],
  imports: [
    IonicPageModule.forChild(PriceOverTime),
  ],
  exports: [
    PriceOverTime
  ]
})
export class PriceOverTimeModule {}
