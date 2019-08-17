import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../shared/services/rpc.service';
import { Product } from '../../../products/models/product';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ArrayHelper } from '../../../utils/ArrayHelper';

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
   * @var products: Product[][] - массив массивов объектов продуктов
   */
  private products: Product[][];

  /**
   * constructor
   * @param rpcService - сервис
   * @param activatedRoute -
   */
  constructor( private rpcService: RpcService<Product>, private activatedRoute: ActivatedRoute, private router: Router ) {
    this.router.events.subscribe( val => {
      if ( val instanceof NavigationEnd ) {
        this.categoryId = this.activatedRoute.snapshot.params['id'];
        this.makeRequest();
      }
    });
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.makeRequest();
  }

  /**
   * makeRequest
   */
  private makeRequest () {
    this.rpcService.makeRequest('get', 'products/list-by-category-id/' + this.categoryId ).subscribe(( products ) => {
      this.products = ArrayHelper.breakIntoPieces( products );
    });
  }
}
