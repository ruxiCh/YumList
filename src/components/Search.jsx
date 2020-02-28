import React from 'react'

import GoToButton from "./GoToButton"
import ProductList from "./ProductList"
import CategoryList from "./CategoryList"

class Search extends React.Component {
    filterProducts(products) {
        if(this.props.selectedCategories.length === 0) {
            return products
        } else {
            let filteredProducts = products
            filteredProducts = filteredProducts.filter((product) => {
                for(let i=0; i<this.props.selectedCategories.length; i++) {
                    if(product.category_id === this.props.selectedCategories[i]) {
                        return true;
                    }
                }
                return false
            })
            return filteredProducts
        }
    }
    render() {
        return(
            <div>
                <header>
                    <div className="logo"></div>
                    <GoToButton destination="List" goToPage={this.props.goToPage} />
                </header>
                <div className="category_list_container">
                    <CategoryList categories={this.props.categories} selectedCategories={this.props.selectedCategories} selectOrUnselectCategory={this.props.selectOrUnselectCategory} />
                </div>
                <div className="product_list_container">
                    <ProductList type="search" products={this.filterProducts(this.props.products)} selectOrUnselectProduct={this.props.selectOrUnselectProduct} />
                </div>
            </div>
        )
    }
}


export default Search;
