import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

/**
 * @classdesc - сервис для работы с продуктами. Наполнение корзины,
 * получение данных о сформированном наборе продуктов(товаров)
 */
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /**
   *  @var products: Product[] -
   */
  private products: Product[] = [];

  /**
   * constructor
   * @param http - объект для работы с http
   * @param cookieService -
   */
  constructor( private http: HttpClient, private cookieService: CookieService ) { }

  /**
   * addProduct - добавить товар в заказу
   * @param product - объект товара
   * @return void
   */
  public addProduct ( product: Product ) {
    if ( this.cookieService.get( 'products' ) !== ''  ) {
      this.products = JSON.parse( this.cookieService.get( 'products' ) );
    }
    this.products.push( product );
    this.cookieService.set( 'products', JSON.stringify( this.products ) );
  }

  /**
   * getAllOrders - получить все заказы
   * @return Product[]
   */
  public  getAllOrders (): Product[] {
    if ( this.cookieService.get( 'products' ) !== ''  ) {
      return JSON.parse( this.cookieService.get( 'products' ) );
    }
    return this.products;
  }

  /**
   * getCountProducts - получить количество продуктов
   * @return number
   */
  public  getCountProducts (): number {
    if ( this.cookieService.get( 'products' ) !== ''  ) {
      return JSON.parse( this.cookieService.get( 'products' ) ).length;
    }
    return 0;
  }

  /**
   * getTotalCostProducts - получить общую стоимость заказанных продуктов
   * @return number
   */
  public getTotalCostProducts(): number {

    if ( this.cookieService.get( 'products' ) !== ''  ) {
      let totalCost: number;
      this.products = JSON.parse( this.cookieService.get( 'products' ) );
      totalCost = this.products.map( ( product ) => (
        product.price - ( ( product.price * product.discount ) / 100 )
      )).reduce( function( previousValue, currentValue ) {
        return previousValue + currentValue;
      }, 0 );

      return totalCost;
    }
    return 0;
  }
}
