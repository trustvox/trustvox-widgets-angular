import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { getProduct } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = getProduct(params.get("productId"));
    });
  }
}
