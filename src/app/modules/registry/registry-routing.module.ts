import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../registry/components/home/home.component';
import { SuccessRegistryComponent } from './components/success-registry/success-registry.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {'breadCrumbName': 'Регистрация'},
    //  canActivate:[AppGuard]
  },
  {
    path: 'success-registry',
    component: SuccessRegistryComponent,
    data: {'breadCrumbName': 'Успешная регистрация'},
    //  canActivate:[AppGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistryRoutingModule { }
