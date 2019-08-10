'use strict';
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
import { BannerComponent } from './catalog/components/banner/banner.component';
import { RoutingModule } from './router/routing.module';
import { ListComponent } from './catalog/components/list/list.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PreloaderComponent } from './preloader/preloader.component';
import { CardBootstrapComponent } from './catalog/components/card-bootstrap/card-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { PopupMessagesComponent } from './popup-messages/popup-messages.component';

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
    BannerComponent,
    ListComponent,
    PreloaderComponent,
    CardBootstrapComponent,
    PopupMessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
