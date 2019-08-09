'use strict';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RpcService } from '../../../../shared/services/rpc.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { ValidatorMessageComponent } from '../../../../shared/components/validator-message/validator-message.component';

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
  constructor( private rpcService: RpcService<User>, private router: Router ) {}

  /**
   *  @var userForm: FormGroup - группа валидируемых полей
   */
  private userForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(32 )
    ]),
    password: new FormControl('' , [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(1024 )
    ])
  });

  /**
   * onSubmit - перехватываем события откравки формы
   * @return void
   */
  onSubmit() {
    this.rpcService.makePost( 'token', this.userForm.value ).subscribe(
      response => {
        console.log(response);
        if ( response.hasOwnProperty('status') ) {
          if ( response.status === 'OK' ) {
            this.userForm.reset();
            sessionStorage.setItem('token', response.token );
            sessionStorage.setItem('username', response.username);
            this.router.navigate(['/'] );
          }
        }
      }, error => {
        console.log(error);
        this.errors = error;
        this.userForm.reset();
        this.router.navigate(['/auth/error-auth'] );
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
