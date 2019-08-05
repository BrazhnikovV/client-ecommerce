'use strict';
import { Component, OnInit } from '@angular/core';
import { Category } from './models/category';
import { RpcService } from '../shared/services/rpc.service';

/**
 * @classdesc - CategoriesComponent компонент категорий продуктов и горизонтального меню
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [RpcService]
})
export class CategoriesComponent implements OnInit {

  /**
   * @var id: number - идентификатор
   */
  private categories: Category[];

  /**
   * constructor
   */
  constructor( private rpcService: RpcService<Category> ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.makeRequest('get', 'categories/list' ).subscribe(( categories ) => {
      console.log(categories);
      this.categories = categories;
    });
  }
}
