import { Component, OnInit } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  products;
  constructor() {
    this.products = products;
  }

  ngOnInit() {}

  get categories() {
    const allCategories = products
      .map(product => product.category)
      .filter(category => category);

    return [...new Set(allCategories)];
  }
}
