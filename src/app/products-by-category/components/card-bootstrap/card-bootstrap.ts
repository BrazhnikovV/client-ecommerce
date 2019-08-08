import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-product-by-category',
  templateUrl: './card-bootstrap.html',
  styleUrls: ['./card-bootstrap.css']
})
export class CardBootstrapComponent implements OnInit {

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
