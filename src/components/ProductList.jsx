import React from "react";

import ProductListItem from "./ProductListItem";

function ProductList({ products, toggleProduct}) {
  return (
    <div className="product_list">
      {products.map((product) => {
        return (
          <ProductListItem
            id={product.id}
            key={product.id}
            name={product.name}
            category_id={product.category_id}
            selected={product.selected}
            toggle={toggleProduct}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
