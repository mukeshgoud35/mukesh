import React, { Component } from "react";
import productsMock from "../../mocks/mock-products.json";
import ProductCard from "../../components/product-card/ProductCard";

import './products.scss'

class Products extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: productsMock.search_response.items.Item
    };
  }

  /* if the products API exists, this is how the allProducts array in the state is updated

  componentDidMount() {
    const componentInstance = this;
    
    fetch(API)
      .then(res=>res.json())
      .then(resJson=>{
          this.setState({
              allProducts: resJson
          })
      })
  }
  */

  render() {
    const { allProducts: products } = this.state;
    return (
      <div className="products-container card">
        {products.map(product => (
          <ProductCard productDetails={product} key={product.dpci}/>
        ))}
      </div>
    );
  }
}

export default Products;
