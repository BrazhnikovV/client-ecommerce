'use strict';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ValidatorMessageComponent } from '../../../../shared/components/validator-message/validator-message.component';
import { UserRegistry } from '../../models/user-registry';
import { RpcService } from '../../../../shared/services/rpc.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * @classdesc - HomeComponent родительский компонент функционального модуля
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * @var viewChildren: QueryList<ValidatorMessageComponent> - список компонентов
   * для отображения сообщений валидатора
   */
  @ViewChildren( ValidatorMessageComponent )
  private viewChildren: QueryList<ValidatorMessageComponent>;

  /**
   *  @var errors: [] - массив ошибок
   */
  private errors: [];

  /**
   * constructor
   * @param rpcService - сервис
   */
  constructor( private rpcService: RpcService<UserRegistry>, private router: Router ) {}

  /**
   *  @var regForm: FormGroup - группа валидируемых полей
   */
  private regForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(32 )
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(32 )
    ]),
    password: new FormControl('' , [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(1024 )
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(32 )
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(32 )
    ]),
  });

  /**
   * onSubmit - перехватываем события откравки формы
   * @return void
   */
  onSubmit() {
    this.rpcService.makePost( 'registry', this.regForm.value ).subscribe(
      response => {
        if ( response.hasOwnProperty('status') ) {
          if ( response.status === 'OK' ) {
            this.regForm.reset();
            this.router.navigate(['/registry/success-registry'] );
          }
        }
      }, error => {
        this.errors = error;
        this.regForm.reset();
        this.router.navigate(['/registry/error-registry'] );
      }
    );
  }

  /**
   * inputChange - перехватываем событие набора символов в текстовых полях
   * @return void
   */
  inputChange() {
    this.viewChildren.forEach( child => child.ngOnChanges() );
  }

  /**
   * ngOnInit
   */
  ngOnInit() {}
}
