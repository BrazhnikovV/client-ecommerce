import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-product-by-category',
  templateUrl: './item-product-by-category.component.html',
  styleUrls: ['./item-product-by-category.component.css']
})
export class ItemProductByCategoryComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
