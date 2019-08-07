'use strict';
import { Component, OnInit } from '@angular/core';
import { RpcService } from '../shared/services/rpc.service';
import { Product } from './models/product';

/**
 * @classdesc - ProductsComponent компонент продукты
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [RpcService]
})
export class ProductsComponent implements OnInit {

  /**
   * @var products: Product[] - массив объектов продуктов
   */
  private products: Product[] = [];

  /**
   * constructor
   */
  constructor( private rpcService: RpcService<Product> ) {}

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.makeRequest('get', 'products/list' ).subscribe(( products ) => {
      this.products = products;
    });
  }
}
