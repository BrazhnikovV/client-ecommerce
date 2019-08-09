'use strict';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

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
   */
  constructor( private authService: AuthService ) { }

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
}
