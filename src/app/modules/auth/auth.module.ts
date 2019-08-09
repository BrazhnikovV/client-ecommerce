'use strict';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { ErrorAuthComponent } from './components/error-auth/error-auth.component';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/primeng';

/**
 * @classdesc - AuthModule функциональный модуль для выполнения функционала аутентификации
 */
@NgModule({
  declarations: [HomeComponent, ErrorAuthComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export default class AuthModule { }
