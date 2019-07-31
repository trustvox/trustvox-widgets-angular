import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FromCategoryPipe } from "./from-category.pipe";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductReviewsComponent } from "./product-reviews/product-reviews.component";
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FromCategoryPipe,
    ProductDetailsComponent,
    ProductReviewsComponent,
    AboutPageComponent,
    ProductListComponent
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
