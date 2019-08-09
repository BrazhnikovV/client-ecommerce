'use strict';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { ErrorAuthComponent } from './components/error-auth/error-auth.component';

/**
 * @classdesc - AuthModule функциональный модуль для выполнения функционала аутентификации
 */
@NgModule({
  declarations: [HomeComponent, ErrorAuthComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export default class AuthModule { }
