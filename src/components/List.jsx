import React from "react"
import { render } from "react-dom"

import GoToButton from "./GoToButton"
import ProductList from "./ProductList"
import Search from "./Search"

var List = React.createClass({
        filterProducts(products) {
            let filteredProducts = products.filter((item) => item.selected === true)
            return filteredProducts
        },
        render() {
            return(
                <div>
                    <header>
                        <div className="logo"></div>
                        <GoToButton destination="Search" goToPage={this.props.goToPage} />
                    </header>
                    <div className="product_list_container">
                        <ProductList type="list" products={this.filterProducts(this.props.products)} selectOrUnselectProduct={this.props.selectOrUnselectProduct} />
                    </div>
                </div>
            )
        }
    });

module.exports = List;
