import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './layout/app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CopyrightComponent } from './layout/copyright/copyright.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { DealsWeekComponent } from './deals-week/deals-week.component';
import { ItemProductComponent } from './products/components/item-product/item-product.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { BannerComponent } from './products-by-category/components/banner/banner.component';
import { RoutingModule } from './router/routing.module';
import { ListComponent } from './products-by-category/components/list/list.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { ItemProductByCategoryComponent } from './products-by-category/components/item-product-by-category/item-product-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    CategoriesComponent,
    ProductsComponent,
    DealsWeekComponent,
    ItemProductComponent,
    ProductsByCategoryComponent,
    BannerComponent,
    ListComponent,
    PreloaderComponent,
    ItemProductByCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
