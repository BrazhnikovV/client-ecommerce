'use strict';
import { Component, OnInit } from '@angular/core';
import { Category } from './models/category';
import { RpcService } from '../shared/services/rpc.service';
import {NavigationEnd, Router} from '@angular/router';

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
   * @var categories: Category[] - массив объектов категорий
   */
  private categories: Category[] = [];

  /**
   * @var isHide: boolean -
   */
  private isHide = false;

  /**
   * constructor - конструктор
   * @param rpcService -
   * @param router -
   */
  constructor( private rpcService: RpcService<Category>, private router: Router ) {
    this.router.events.subscribe( event => {
      if ( event instanceof NavigationEnd ) {
        ( event.url === '/cart' ) ? this.isHide = true : this.isHide = false;
      }
    });
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.makeRequest('get', 'categories/list' ).subscribe(( categories ) => {
      this.categories = categories;
    });
  }
}
