'use strict';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorAuthComponent } from './components/error-auth/error-auth.component';
import { LogoutComponent } from './components/logout/logout.component';

/**
 * @var routes: Routes - маршруты модуля
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {'breadCrumbName': 'Авторизация'},
    //  canActivate:[AppGuard]
  },
  {
    path: 'error-auth',
    component: ErrorAuthComponent,
    data: {'breadCrumbName': 'Ошибка авторизации'},
    //  canActivate:[AppGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {'breadCrumbName': ''},
    //  canActivate:[AppGuard]
  }
];

/**
 * @classdesc - AuthRoutingModule модуль управления маршрутизацией
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
