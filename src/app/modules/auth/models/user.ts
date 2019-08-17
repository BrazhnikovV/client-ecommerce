'use strict';
/**
 * @description - User интерфейс модели пользователя
 */
export interface User {

  /**
   * @var username: string
   */
  username: string;

  /**
   * @var password: string
   */
  password: string;

  /**
   * @var token: string
   */
  token: string;

  /**
   * @var first_name: string
   */
  first_name: string;

  /**
   * @var last_name: string
   */
  last_name: string;

  /**
   * @var email: string
   */
  email: string;

  /**
   * @var phone: string
   */
  phone: string;
}
