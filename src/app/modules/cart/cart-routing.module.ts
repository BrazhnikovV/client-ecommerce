import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

/**
 * @var routes: Routes - маршруты модуля
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {'breadCrumbName': 'Корзина'},
    //  canActivate:[AppGuard]
  }
];

/**
 * @classdesc - CartRoutingModule модуль управления маршрутизацией
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
