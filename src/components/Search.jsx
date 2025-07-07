import React from "react";

import GoToButton from "./GoToButton";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";

function Search({products, categories, selectedCategories, toggleProduct, toggleCategory, goToPage}) {
  function filterProducts() {
    if (selectedCategories.length === 0) {
      return products;
    } else {
      let filteredProducts = products;
      filteredProducts = filteredProducts.filter((product) => {
        for (let i = 0; i < selectedCategories.length; i++) {
          if (product.category_id === selectedCategories[i]) {
            return true;
          }
        }
        return false;
      });
      return filteredProducts;
    }
  }

  return (
    <div>
      <header>
        <div className="logo"></div>
        <GoToButton destination="List" goToPage={goToPage} />
      </header>
      <div className="category_list_container">
        <CategoryList
          categories={categories}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
        />
      </div>
      <div className="product_list_container">
        <ProductList
          type="search"
          products={filterProducts()}
          toggleProduct={toggleProduct}
        />
      </div>
    </div>
  );
}

export default Search;
