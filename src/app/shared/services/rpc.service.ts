import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * @classdesc - сервис для получения данных ...
 */
@Injectable({
  providedIn: 'root'
})
export class RpcService<T extends {}> {

  /**
   *  @var string apiUrl - url адрес rest api(rpc)
   */
  private apiUrl = 'http://localhost:8086/api/';

  /**
   *  @var string apiUrl - url адрес rest api(rpc)
   */
  private regUrl = 'http://localhost:8086/';

  /**
   *  @var string token - url адрес rest api(rpc)
   */
  private token = '8d5dd466-226c-419b-ac04-a5ccc6b42d82';

  /**
   * constructor - конструктор
   * @param http - объект для работы с http
   */
  constructor( private http: HttpClient) {}

  /**
   * makeRequest -
   * @param method - название метода HTTP протокола
   * @param path   - путь определяющий сущность и операцию выполняемою на дней
   * @return Observable<any> | throwError( error )
   */
  public makeRequest( method: string, path: string ): Observable<any> {
    return this.http[method]<T[]>( this.apiUrl + path, this.getAuthHeaders() ).pipe(
      map( event => {
        return  event;
      }),
      catchError(error => {
        return throwError( error );
      })
    );
  }

  /**
   * makePost -
   * @param path   - путь определяющий сущность и операцию выполняемою на дней
   * @param data   - набор данных, которые необходимо передать серверу
   * @return Observable<any> | throwError( error )
   */
  public makePost( path: string, data: T ): Observable<any> {
    return this.http.post<T[]>( this.apiUrl + path, data, this.getAuthHeaders() ).pipe(
      map( event => event ),
      catchError(error => {
        return throwError( 'Error: obviously invalid data structure.' );
      })
    );
  }

  /**
   * makePostAuthOrReg -
   * @param path   - путь определяющий сущность и операцию выполняемою на дней
   * @param data   - набор данных, которые необходимо передать серверу
   * @return Observable<any> | throwError( error )
   */
  public makePostAuthOrReg( path: string, data: T ): Observable<any> {
    return this.http.post<T[]>( this.regUrl + path, data ).pipe(
      map( event => event ),
      catchError(error => {
        return throwError( 'Error: obviously invalid data structure.' );
      })
    );
  }

  /**
   * getAuthHeaders - сформировать объект с заголовками
   * @return void
   */
  private getAuthHeaders(): {} {

    const hash = btoa( sessionStorage.getItem('token') + ':' );
    const httpOptions = {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token}),
      // reportProgress: true,
      // observe: 'events',
    };

    return httpOptions;
  }
}
