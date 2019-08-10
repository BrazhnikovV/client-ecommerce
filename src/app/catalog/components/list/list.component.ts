import { Component, OnInit } from '@angular/core';
import { RpcService } from '../../../shared/services/rpc.service';
import { Product } from '../../../products/models/product';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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
  private products: any;

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
      this.products = this.breakIntoPieces( products );
      console.log(this.products);
    });
  }

  private breakIntoPieces ( arr: [] ) {
    const SIZE = 3;

    const res = arr.reduce((p, c) => {
      if (p[p.length - 1].length === SIZE) {
        p.push([]);
      }

      p[p.length - 1].push(c);
      return p;
    }, [[]]);
    return res;
  }
}
