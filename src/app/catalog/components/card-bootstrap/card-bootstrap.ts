'use strict';
import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from '../../../shared/services/orders.service';
import { Product } from '../../../products/models/product';
declare var $: any;

/**
 * @classdesc - CardBootstrapComponent компонент карточки товара(продукта)
 */
@Component({
  selector: 'app-card-bootstrap',
  templateUrl: './card-bootstrap.html',
  styleUrls: ['./card-bootstrap.css'],
  providers: [OrdersService]
})
export class CardBootstrapComponent implements OnInit {

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
   *  @var product: Product -
   */
  private product: Product;

  /**
   * @var productNumber: String -
   */
  @Input()
  private productNumber: String;

  /**
   * constructor
   * @param orderService -
   */
  constructor( private orderService: OrdersService ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {}

  /**
   * onClick
   * @param $event: MouseEvent -
   * @return void
   */
  private onClick( $event: MouseEvent ) {
    console.log('CardBootstrapComponent :: onClick()');

    this.product = <Product> {
      description: this.description,
      id: this.id,
      images: [],
      name: this.name,
      price: this.price,
      productNumber: this.productNumber
    };
    this.orderService.addProduct( this.product );
    $('.toast').toast('show');
    console.log(this.orderService.getAllOrders());
    $event.preventDefault();
  }
}
