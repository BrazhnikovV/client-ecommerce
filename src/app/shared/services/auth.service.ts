import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @classdesc - сервис для получения данных ...
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   *  @var isLogged: boolean - статус аутентификации пользователя
   */
  private isLogged: boolean = false;

  /**
   * constructor
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient ) {}

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
}
