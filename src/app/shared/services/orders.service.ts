import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../models/order';
import { Product } from '../../products/models/product';

/**
 * @classdesc - сервис для получения данных ...
 */
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  /**
   *  @var order: Order -
   */
  private order: Order;

  /**
   *  @var products: Product[] -
   */
  private products: Product[] = [];

  /**
   * constructor
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient, private cookieService: CookieService ) {}

  /**
   * addProduct - добавить товар в заказу
   * @param product - объект товара
   * @return void
   */
  private addProduct ( product: Product ) {
    this.products.push( product );
    this.cookieService.set( 'products', JSON.stringify( this.products ) );
  }

  /**
   * getAllOrders - получить все заказы
   * @return void
   */
  private getAllOrders (): Order[] {
    return JSON.parse( this.cookieService.get( 'products' ) );
  }
}
