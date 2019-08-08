'use strict';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from '../products-by-category/components/banner/banner.component';
import { ListComponent } from '../products-by-category/components/list/list.component';

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
