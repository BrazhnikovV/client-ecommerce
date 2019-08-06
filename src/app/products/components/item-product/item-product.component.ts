import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {

  /**
   * @var name: String - имя продукта
   */
  @Input()
  private name: String;

  /**
   * @var image: String - название изображения
   */
  @Input()
  private image: String;

  /**
   * @var price: number - стоимость продукта
   */
  @Input()
  private price: number;

  /**
   * constructor
   */
  constructor() { }

  /**
   * ngOnInit
   */
  ngOnInit() {}
}
