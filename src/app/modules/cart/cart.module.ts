'use strict';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardOrderComponent } from './components/card-order/card-order.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, CardOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ]
})
export default class CartModule { }
