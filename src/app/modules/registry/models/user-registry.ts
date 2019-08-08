'use strict';
/**
 * @description - UserRegistry интерфейс модели пользователя
 */
export interface UserRegistry {

  /**
   * @var username: string
   */
  username: string;

  /**
   * @var password: string
   */
  password: string;

  /**
   * @var first_name: string
   */
  firstName: string;

  /**
   * @var last_name: string
   */
  lastName: string;

  /**
   * @var email: string
   */
  email: string;
}
