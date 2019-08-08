import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryRoutingModule } from './registry-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SuccessRegistryComponent } from './components/success-registry/success-registry.component';
import { ErrorRegistryComponent } from './components/error-registry/error-registry.component';

/**
 * @classdesc - RegistryModule функциональный модуль
 * для выполнения функционала регистрации пользователя
 */
@NgModule({
  declarations: [HomeComponent, SuccessRegistryComponent, ErrorRegistryComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ReactiveFormsModule,
    RegistryRoutingModule
  ]
})
export default class RegistryModule { }
