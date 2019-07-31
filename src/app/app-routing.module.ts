import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "about", component: AboutPageComponent },
  { path: ":productId", component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
