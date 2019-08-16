/**
 * @description - Product интерфейс модели продукт
 */
export interface Product {

  /**
   * @var id: number
   */
  id: number;

  /**
   * @var name: string
   */
  name: string;

  /**
   * @var description: string
   */
  description: string;

  /**
   * @var price: number
   */
  price: number;

  /**
   * @var discount: number
   */
  discount: number;

  /**
   * @var amount: number
   */
  amount: number;

  /**
   * @var product_number: string
   */
  productNumber: string;

  /**
   * @var images: []
   */
  images: [];
}
