import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

/**
 * @classdesc - сервис для получения данных ...
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * constructor
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient, private cookieService: CookieService ) {}

  /**
   * logout - выполнить выход из приложения
   * @return boolean
   */
  public logout(): void {
    sessionStorage.clear();
  }

  /**
   * getIsLogged - получить состояние аутентификации пользователя
   * @return boolean
   */
  public getIsLogged(): boolean {
    return Boolean( sessionStorage.getItem('token') );
  }

  /**
   * getUserName -
   * @return string
   */
  public getUserName(): string {
    return sessionStorage.getItem('username');
  }

  /**
   * getToken -
   */
  public getToken(): string {
    const token: string = this.cookieService.get( 'token' );
    if ( token !== ''  ) {
      return token;
    }
    return '';
  }
}
