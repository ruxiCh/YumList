import React from "react";

import GoToButton from "./GoToButton";
import ProductList from "./ProductList";

function List({products, goToPage, toggleProduct}) {
  function filterProducts() {
    return products.filter((item) => item.selected === true);
  }

  return (
    <div>
        <header>
          <div className="logo"></div>
          <GoToButton destination="Search" goToPage={goToPage} />
        </header>
        <div className="product_list_container">
          <ProductList
            type="list"
            products={filterProducts()}
            toggleProduct={toggleProduct}
          />
        </div>
      </div>
  )
}

export default List;
