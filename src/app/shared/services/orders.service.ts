'use strict';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Order } from '../../modules/cart/models/order';

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
  private order: Order

  /**
   * constructor
   * @param http - объект для работы с http
   * @param cookieService -
   */
  constructor( private http: HttpClient, private cookieService: CookieService ) {}
}
