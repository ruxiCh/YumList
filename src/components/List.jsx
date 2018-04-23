import React from "react"
import { render } from "react-dom"

import GoToButton from "./GoToButton"
import ProductList from "./ProductList"

var List = React.createClass({
        render() {
            return(
                <div>
                    <header>
                        <div className="logo"></div>
                        <GoToButton destination = "Search" activePage={this.props.activePage} goToPage={this.props.goToPage} />
                    </header>
                    <div className="product_list_container">
                        <ProductList type="list" products={this.props.products} selectOrUnselectProduct={this.props.selectOrUnselectProduct} />
                    </div>
                </div>
            )
        }
    });

module.exports = List;
