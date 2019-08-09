'use strict';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorMessageComponent } from './components/validator-message/validator-message.component';

/**
 * @classdesc - SharedModule обобщающий модуль для работы с общими компонентами
 */
@NgModule({
  imports: [
    CommonModule,
    MessageModule
  ],
  declarations: [ValidatorMessageComponent],
  exports: [
    ValidatorMessageComponent,
    MessageModule,
    MessagesModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule]
})
export class SharedModule { }
