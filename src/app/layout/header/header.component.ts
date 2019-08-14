'use strict';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ProductsService } from '../../shared/services/products.service';

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
   * @param productsService -
   */
  constructor( private authService: AuthService, private productsService: ProductsService ) { }

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
   * getUserName - получить имя аутентифицированного пользователя
   * @return string
   */
  private  getUserName(): string {
    return  this.authService.getUserName();
  }

  /**
   * getCountProducts - получить количество добавленных в корзину товаров(продуктов)
   * @return number
   */
  private  getCountProducts(): number {
    return  this.productsService.getCountProducts();
  }

  /**
   * getCountProducts - получить общую стоимость добавленных в корзину товаров(продуктов)
   * @return number
   */
  private  getTotalCostProducts(): number {
    return  this.productsService.getTotalCostProducts();
  }
}
