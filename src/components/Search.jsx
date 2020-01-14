import React from 'react'

import GoToButton from "./GoToButton"
import ProductList from "./ProductList"

class Search extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <div className="logo"></div>
                    <GoToButton destination="List" goToPage={this.props.goToPage} />
                </header>
                <div className="product_list_container">
                    <ProductList type="search" products={this.props.products} selectOrUnselectProduct={this.props.selectOrUnselectProduct} />
                </div>
            </div>
        )
    }
}


export default Search;
