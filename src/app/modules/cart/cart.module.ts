'use strict';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardOrderComponent } from './components/card-order/card-order.component';
import { SharedModule } from '../../shared/shared.module';
import { ConfirmDialogModule, DialogModule } from 'primeng/primeng';

@NgModule({
  declarations: [HomeComponent, CardOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    DialogModule,
    ConfirmDialogModule,
    CartRoutingModule
  ]
})
export default class CartModule { }
