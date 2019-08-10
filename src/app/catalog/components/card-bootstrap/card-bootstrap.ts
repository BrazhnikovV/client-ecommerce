import { Component, Input, OnInit } from '@angular/core';
import {OrdersService} from '../../../shared/services/orders.service';

@Component({
  selector: 'app-card-bootstrap',
  templateUrl: './card-bootstrap.html',
  styleUrls: ['./card-bootstrap.css'],
  providers: [OrdersService]
})
export class CardBootstrapComponent implements OnInit {

  /**
   * @var name: String - имя продукта
   */
  @Input()
  private name: String;

  /**
   * @var description: String - описание продукта
   */
  @Input()
  private description: String;

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
   * @var productNumber: String -
   */
  @Input()
  private productNumber: String;

  /**
   * constructor
   */
  constructor( orderService: OrdersService ) { }

  /**
   * ngOnInit
   */
  ngOnInit() {}

  /**
   * onClick
   * @return void
   */
  private onClick() {
    console.log('CardBootstrapComponent :: onClick()');
  }
}
