import React from 'react'

import GoToButton from "./GoToButton"
import ProductList from "./ProductList"
import CategoryList from "./CategoryList"

class Search extends React.Component {
    render() {
        console.log(this.props.categories)
        return(
            <div>
                <header>
                    <div className="logo"></div>
                    <GoToButton destination="List" goToPage={this.props.goToPage} />
                </header>
                <div className="category_list_container">
                    <CategoryList categories={this.props.categories} />
                </div>
                <div className="product_list_container">
                    <ProductList type="search" products={this.props.products} selectOrUnselectProduct={this.props.selectOrUnselectProduct} />
                </div>
            </div>
        )
    }
}


export default Search;
