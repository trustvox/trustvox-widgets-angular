import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-reviews",
  templateUrl: "./product-reviews.component.html",
  styleUrls: ["./product-reviews.component.scss"]
})
export class ProductReviewsComponent implements OnInit {
  @Input() product: object;

  constructor() {}

  ngOnInit() {}
}
