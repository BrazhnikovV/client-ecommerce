'use strict';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {OrdersService} from '../../shared/services/orders.service';

/**
 * @classdesc - HeaderComponent компонент головная часть макета страницы
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  /**
   * constructor
   * @param authService -
   * @param orderService -
   */
  constructor( private authService: AuthService, private orderService: OrdersService) { }

  /**
   * ngOnInit
   */
  ngOnInit() {}

  /**
   * isLogged - выполнить fentynbabrfwb.
   * @return boolean
   */
  private isLogged(): boolean {
    return this.authService.getIsLogged();
  }

  /**
   * getUserName -
   * @return string
   */
  private  getUserName(): string {
    return  this.authService.getUserName();
  }

  /**
   * getCountProducts -
   * @return number
   */
  private  getCountProducts(): number {
    return  this.orderService.getCountProducts();
  }

  /**
   * getCountProducts -
   * @return number
   */
  private  getTotalCostProducts(): number {
    return  this.orderService.getTotalCostProducts();
  }
}
