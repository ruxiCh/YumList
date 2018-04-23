import React from 'react'
import { render } from 'react-dom'

import GoToButton from "./GoToButton"
import ProductList from "./ProductList"

var Search = React.createClass({
        render() {
            return(
                <div>
                    <header>
                        <div className="logo"></div>
                        <GoToButton destination = "List" activePage={this.props.activePage} goToPage={this.props.goToPage} />
                    </header>
                    <div className="product_list_container">
                        <ProductList type="search" products={this.props.products} selectOrUnselectProduct={this.props.selectOrUnselectProduct} />
                    </div>
                </div>
            )
        }
    });

module.exports = Search;
