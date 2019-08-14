'use strict';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from '../catalog/components/banner/banner.component';
import { ListComponent } from '../catalog/components/list/list.component';

/**
 * @var routes: Routes - маршруты приложения
 */
const routes: Routes = [
  {
    path: 'category/:id',
    component: ListComponent,
    data: {'breadCrumbName': 'Пользователи'},
    //  canActivate:[AppGuard]
  },
  {
    path: '',
    component: BannerComponent,
    data: {'breadCrumbName': 'Пользователи'}
    //  canActivate:[AppGuard]
  },
  {
    path: 'registry',
    loadChildren: 'src/app/modules/registry/registry.module',
    data: {'breadCrumbName': 'Регистрация'},
    //  canActivate:[AppGuard]
  },
  {
    path: 'auth',
    loadChildren: 'src/app/modules/auth/auth.module',
    data: {'breadCrumbName': 'Авторизация'},
    //  canActivate:[AppGuard]
  },
  {
    path: 'cart',
    loadChildren: 'src/app/modules/cart/cart.module',
    data: {'breadCrumbName': 'Корзина'},
    //  canActivate:[AppGuard]
  }
];

/**
 * @classdesc - RoutingModule модуль управления маршрутизацией
 */
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
