'use strict';
import { Component, Input, OnInit} from '@angular/core';
import { Product} from '../../../../products/models/product';
import { ProductsService } from '../../../../shared/services/products.service';
declare var $: any;

/**
 * @classdesc - CardBootstrapComponent компонент карточки товара(продукта)
 */
@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrls: ['./card-order.component.css']
})
export class CardOrderComponent implements OnInit {

  /**
   * @var id: number - идентификатор товара
   */
  @Input()
  private id: number;

  /**
   * @var name: String - имя продукта
   */
  @Input()
  private name: String;

  /**
   * @var description: String - описание продукта
   */
  @Input()
  private description: String;

  /**
   * @var image: String - название изображения
   */
  @Input()
  private image: String;

  /**
   * @var price: number - стоимость продукта
   */
  @Input()
  private price: number;

  /**
   * @var price: number - скидка на продукт
   */
  @Input()
  private discount: number;

  /**
   * @var amount: number - количество товаров в наличии
   */
  @Input()
  private amount: number;

  /**
   *  @var product: Product -
   */
  private product: Product;

  /**
   * @var productNumber: String -
   */
  @Input()
  private productNumber: String;

  /**
   * @var countProducts: number -
   */
  private countProducts = 1;

  /**
   * @var totalCost: number -
   */
  private totalCost: number;

  /**
   * constructor
   * @param productsService -
   */
  constructor( private productsService: ProductsService ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.totalCost = this.price;
  }

  /**
   * onClick - слушать событие клика по кнопке в корзину
   * @param $event: MouseEvent - объект события мыши
   * @return void
   */
  private onClick( $event: MouseEvent ) {
    this.product = <Product> {
      description: this.description,
      id: this.id,
      images: [],
      name: this.name,
      price: this.price,
      discount: this.discount,
      amount: this.amount,
      productNumber: this.productNumber
    };
    this.productsService.addProduct( this.product );
    $('.toast').toast('show');
    $event.preventDefault();
  }

  /**
   * onMinusClick - слушать событие клика по кнопке уменьшить количество товаров
   * @param $event: MouseEvent - объект события мыши
   * @return void
   */
  private onMinusClick( $event: MouseEvent ) {
    if ( this.countProducts === 1 ) {
      return false;
    }
    this.countProducts --;
    this.totalCost = this.price * this.countProducts;
    $event.preventDefault();
  }

  /**
   * onPlusClick - слушать событие клика по кнопке увеличить количество товаров
   * @param $event: MouseEvent - объект события мыши
   * @return void
   */
  private onPlusClick($event: MouseEvent) {
    if ( this.countProducts >= this.amount ) {
      return false;
    }
    this.countProducts ++;
    this.totalCost = this.price * this.countProducts;
    $event.preventDefault();
  }
}
