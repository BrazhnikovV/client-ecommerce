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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    CategoriesComponent,
    ProductsComponent,
    DealsWeekComponent,
    ItemProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
