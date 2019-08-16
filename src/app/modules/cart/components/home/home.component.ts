'use strict';
import {Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../../../../products/models/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { ArrayHelper } from '../../../../utils/ArrayHelper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorMessageComponent } from '../../../../shared/components/validator-message/validator-message.component';
import {RpcService} from '../../../../shared/services/rpc.service';
import {User} from '../../../auth/models/user';
import {Router} from '@angular/router';

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
   * @var products: Product[] - массив объектов продуктов
   */
  private products: Product[];

  /**
   * constructor - конструктор
   */
  constructor( private productsService: ProductsService, private rpcService: RpcService<User>, private router: Router ) { }

  /**
   *  @var userForm: FormGroup - группа валидируемых полей
   */
  private orderForm: FormGroup = new FormGroup({
    accountNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(32 )
    ]),
    orderStatus: new FormControl('' , [
      Validators.required,
    ]),
    address: new FormControl('' , [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(512 )
    ]),
    products: new FormControl('' , [
      Validators.required
    ])
  });

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.products = ArrayHelper.breakIntoPieces( this.productsService.getAllProducts() );
    console.log(this.productsService.getAllProducts());
  }

  /**
   * inputChange - перехватываем событие набора символов в текстовых полях
   * @return void
   */
  inputChange() {
    this.viewChildren.forEach( child => child.ngOnChanges() );
  }

  /**
   * onSubmit - перехватываем события откравки формы
   * @return void
   */
  onSubmit() {
    this.rpcService.makePost( 'token', this.orderForm.value ).subscribe(
      response => {
        if ( response.hasOwnProperty('status') ) {
          if ( response.status === 'OK' ) {
            this.orderForm.reset();
            // this.router.navigate(['/'] );
          }
        }
      }, error => {
        console.log(error);
        this.errors = error;
        this.orderForm.reset();
        // this.router.navigate(['/auth/error-auth'] );
      }
    );
  }
}
