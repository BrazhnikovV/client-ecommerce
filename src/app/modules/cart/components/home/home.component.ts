'use strict';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../products/models/product';
import {ProductsService} from '../../../../shared/services/products.service';
import {ArrayHelper} from '../../../../utils/ArrayHelper';

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
   * @var products: Product[] - массив объектов продуктов
   */
  private products: Product[];

  /**
   * constructor - конструктор
   */
  constructor( private productsService: ProductsService ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.products = ArrayHelper.breakIntoPieces( this.productsService.getAllProducts() );
    console.log(this.productsService.getAllProducts());
  }
}
