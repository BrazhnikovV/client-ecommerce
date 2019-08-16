'use strict';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardOrderComponent } from './components/card-order/card-order.component';

@NgModule({
  declarations: [HomeComponent, CardOrderComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export default class CartModule { }
