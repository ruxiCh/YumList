import React from "react";

import GoToButton from "./GoToButton";
import ProductList from "./ProductList";

class List extends React.Component {
  filterProducts(products) {
    let filteredProducts = products.filter((item) => item.selected === true);
    return filteredProducts;
  }
  render() {
    return (
      <div>
        <header>
          <div className="logo"></div>
          <GoToButton destination="Search" goToPage={this.props.goToPage} />
        </header>
        <div className="product_list_container">
          <ProductList
            type="list"
            products={this.filterProducts(this.props.products)}
            toggleProduct={this.props.toggleProduct}
          />
        </div>
      </div>
    );
  }
}

export default List;
