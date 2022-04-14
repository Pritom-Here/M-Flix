import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    const { items, valueProperty, nameProperty, imageProperty } = this.props;

    return (
      <>
        {items.map((item) => (
          <div
            key={item[valueProperty]}
            className="col-sm-6 col-md-4 col-lg-6 col-xl-4 px-1 border-rad-1 mb-5"
          >
            <img
              src={item[imageProperty]}
              alt={item[nameProperty]}
              className="w-100 product-image border-rad-1"
            />
            <label className="mt-4 font-syncopate-600 font-size-12 text-mold-white">
              {item[nameProperty]}
            </label>
          </div>
        ))}
      </>
    );
  }
}

export default ProductCard;
