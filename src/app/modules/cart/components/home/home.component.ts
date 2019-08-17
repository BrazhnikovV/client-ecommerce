'use strict';
import {Component, EventEmitter, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import { Product } from '../../../../products/models/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { ArrayHelper } from '../../../../utils/ArrayHelper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorMessageComponent } from '../../../../shared/components/validator-message/validator-message.component';
import { RpcService } from '../../../../shared/services/rpc.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';
import { ConfirmationService } from 'primeng/api';
import { Order } from '../../models/order';

/**
 * @classdesc - HomeComponent родительский компонент функционального модуля
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService]
})
export class HomeComponent implements OnInit {

  /**
   * @var childEvent: EventEmitter<string>
   */
  @Output()
  private childEvent = new EventEmitter<string>();

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
   *  @var display: boolean -
   */
  private display: boolean;

  /**
   * constructor - конструктор
   */
  constructor(
    private productsService: ProductsService,
    private rpcService: RpcService<Order>,
    private router: Router,
    private authService: AuthService,
    private confirmationService: ConfirmationService) { }

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
    const products: Product[] = this.productsService.getAllProducts();
    this.products = ArrayHelper.breakIntoPieces( products );
    this.orderForm.get( 'orderStatus' ).setValue( 'PENDING' );
    this.orderForm.get( 'accountNumber' ).setValue( this.authService.getAccountNumber()  );
    this.orderForm.get( 'products' ).setValue( products );
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
    this.rpcService.makePost( 'orders/create', this.orderForm.value ).subscribe(
      response => {
        if ( response.orderStatus === 'PENDING' ) {
            this.orderForm.reset();
            this.display = true;
            setTimeout( () => {
              this.deleteAllProducts();
              this.router.navigate(['/'] );
            }, 3000);
        }
      }, error => {
        console.log(error);
        this.errors = error;
        this.orderForm.reset();
        // this.router.navigate(['/auth/error-auth'] );
      }
    );
  }

  /**
   * confirm - сообщить об успешном выполнении заказа
   * @param productId - идентификатор товара(продукта)
   * @return void
   */
  private confirm( productId: number ): void {
    this.confirmationService.confirm({
      message: 'Вы действительно хотите удалить товар из корзины?',
      accept: () => {
        this.productsService.deleteProductByID( productId );
        this.products = this.productsService.getAllProducts();
      }
    });
  }

  /**
   * deleteProductByID - удалить товар(продукт) из корзина
   * @param $event - событие EventEmitter дочернего компонента
   * @return void
   */
  private deleteProductByID( $event: string ): void {
    this.confirm( parseInt($event, 10) );
  }

  /**
   * deleteAllProducts - очистить корзину
   * @return void
   */
  private deleteAllProducts(): void {
    this.productsService.deleteAllProducts();
    this.products = this.productsService.getAllProducts();
  }
}
