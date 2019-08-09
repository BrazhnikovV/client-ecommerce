'use strict';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryRoutingModule } from './registry-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { SuccessRegistryComponent } from './components/success-registry/success-registry.component';
import { ErrorRegistryComponent } from './components/error-registry/error-registry.component';

/**
 * @classdesc - RegistryModule функциональный модуль
 * для выполнения функционала регистрации пользователя
 */
@NgModule({
  declarations: [HomeComponent, SuccessRegistryComponent, ErrorRegistryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RegistryRoutingModule
  ]
})
export default class RegistryModule { }
