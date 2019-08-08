import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';

/**
 * @classdesc - AuthModule функциональный модуль для выполнения функционала аутентификации
 */
@NgModule({
  declarations: [HomeComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ButtonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export default class AuthModule { }
