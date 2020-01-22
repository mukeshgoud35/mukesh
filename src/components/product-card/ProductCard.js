import React, { Component } from "react";
import Button from "../../common/button/Button";
import "./product-card.scss";

export default class ProductCard extends Component {
  render() {
    const { productDetails } = this.props;
    const productImage =
      productDetails.images[0].base_url + productDetails.images[0].primary;

    return (
      <div className="product-card">
        <img className="product-card__image" alt="product" src={productImage} />
        <div className="product-card__title">
          <h4>{productDetails.title}</h4>
        </div>
        <h5>{productDetails.brand}</h5>
        <span> Free 2-day shipping with $35 orders</span>
        <h4>
          ${productDetails.list_price.price}
        </h4>
        <Button>Add to cart</Button>
      </div>
    );
  }
}
