'use strict';
/**
 * @description - Order интерфейс заказа
 */
export interface Order {

  /**
   * @var id: number
   */
  id: number;

  /**
   * @var accountNumber: string
   */
  accountNumber: string;

  /**
   * @var address: string
   */
  address: string;

  /**
   * @var orderStatus: string
   */
  orderStatus: string;

  /**
   * @var products: []
   */
  products: [];
}
