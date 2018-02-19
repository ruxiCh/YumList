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
                        <GoToButton destination = "Search" />
                    </header>
                    <div className="product_list_container">
                        <ProductList type="list" />
                    </div>
                </div>
            )
        }
    });

module.exports = List;