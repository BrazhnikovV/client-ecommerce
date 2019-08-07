import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../shared/services/rpc.service';
import { Product } from '../../../products/models/product';
import { ActivatedRoute } from '@angular/router';

/**
 * @classdesc - ListComponent компонент список продуктов для конкретной категории товаров
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /**
   * @var categoryId: number - идентификатор категории
   */
  private categoryId: number;

  /**
   * @var products: Product[] - массив объектов продуктов
   */
  private products: Product[] = [];

  /**
   * constructor
   * @param rpcService - сервис
   * @param activatedRoute -
   */
  constructor( private rpcService: RpcService<Product>, private activatedRoute: ActivatedRoute ) {
    this.categoryId = activatedRoute.snapshot.params['id'];
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.makeRequest('get', 'products/list' ).subscribe(( products ) => {
      this.products = products;
    });
  }
}
