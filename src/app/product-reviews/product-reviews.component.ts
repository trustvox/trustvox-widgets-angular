import { Component, Input, OnChanges, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-product-reviews",
  templateUrl: "./product-reviews.component.html",
  styleUrls: ["./product-reviews.component.scss"]
})
export class ProductReviewsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product;

  constructor() {}

  ngOnInit() {
    this.initializeTrustvox();
  }

  ngOnChanges() {
    this.initializeTrustvox();
    this.cleanupStyles(); // Only necessary for this demo. Please, don't put this in production
  }

  ngOnDestroy() {
    this.cleanupTrustvox();
    this.cleanupStyles(); // Only necessary for this demo. Please, don't put this in production
  }

  initializeTrustvox() {
    this.setTrustvoxAttrs();
    this.addTrustvoxScript();
    this.cleanupTrustvox();
    this.autoloadTrustvox();
  }

  setTrustvoxAttrs() {
    window["_trustvox"] = [];

    window["_trustvox"].push(
      ["_storeId", this.product.storeId],
      ["_productId", this.product.productId],
      ["_customStyle", this.product.customStyle || {}]
    );

    if (this.product.name)
      window["_trustvox"].push(["_productName", this.product.name]);

    if (this.product.photos)
      window["_trustvox"].push(["_productPhotos", this.product.photos]);
  }

  addTrustvoxScript() {
    if (!this.isTrustvoxScriptLoaded()) {
      const script = window.document.createElement("script");
      script.src =
        "//static-staging.trustvox.com.br/sincero-staging/sincero.js";
      script.async = false;
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  autoloadTrustvox() {
    if (window["_trustvox_initializer"])
      window["_trustvox_initializer"].autoInitialize();
  }

  cleanupTrustvox() {
    if (window["_trustvox_initializer"])
      window["_trustvox_initializer"].cleanup();
  }

  isTrustvoxScriptLoaded() {
    return !!document.querySelector(
      "[src='//static-staging.trustvox.com.br/sincero-staging/sincero.js']"
    );
  }

  // Only necessary for this demo. Please, don't put this in production
  cleanupStyles() {
    const customStyle = document.querySelector("style[data-jss]");
    if (customStyle) document.head.removeChild(customStyle);
  }
}
