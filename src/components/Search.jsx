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
                        <GoToButton destination = "List" />
                    </header>
                    <div className="product_list_container">
                        <ProductList type="search" />
                    </div>
                </div>
            )
        }
    });

module.exports = Search;
