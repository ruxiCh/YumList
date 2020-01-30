import React from "react"

import ProductListItem from "./ProductListItem"

class ProductList extends React.Component {
    render() {
        return (
            <div className='product_list'>
                {this.props.products.map((product) => {
                    return <ProductListItem key={product.id} id={product.id} name={product.name} category_id={product.category_id} selected={product.selected} selectOrUnselect={this.props.selectOrUnselectProduct} />
                })}
            </div>
        )
    }
}

export default ProductList
