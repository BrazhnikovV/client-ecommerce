import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
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
  exports: [ValidatorMessageComponent]
})
export class SharedModule { }
