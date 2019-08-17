'use strict';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../products/models/product';
import { ProductsService } from '../../../shared/services/products.service';
import {Category} from '../../../categories/models/category';
declare var $: any;

/**
 * @classdesc - CardBootstrapComponent компонент карточки товара(продукта)
 */
@Component({
  selector: 'app-card-bootstrap',
  templateUrl: './card-bootstrap.html',
  styleUrls: ['./card-bootstrap.css'],
  providers: [ProductsService]
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
  private image: [];

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
   * @var productNumber: String -
   */
  @Input()
  private productNumber: String;

  /**
   * @var category: Category -
   */
  @Input()
  private category: Category;

  /**
   *  @var product: Product -
   */
  private product: Product;

  /**
   * constructor
   * @param productsService -
   */
  constructor( private productsService: ProductsService ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {}

  /**
   * onClick - слушать событие клика по кнопке в корзину
   * @param $event: MouseEvent - объект события мыши
   * @return void
   */
  private onClick( $event: MouseEvent ) {
    // this.image.map( image => delete image['id'] );
    this.product = <Product> {
      description: this.description,
      id: this.id,
      images: this.image,
      name: this.name,
      price: this.price,
      discount: this.discount,
      amount: this.amount,
      productNumber: this.productNumber,
      category: this.category
    };
    this.productsService.addProduct( this.product );
    $('.toast').toast('show');
    $event.preventDefault();
  }
}
