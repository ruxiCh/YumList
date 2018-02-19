import React from "react"
import { render } from "react-dom"

import ProductListItem from "./ProductListItem"

var ProductList = React.createClass({
	componentWillMount() {
		// switch(this.props.type) {
		// 	case "search":
		// 		this.props.productsForList = this.props.products

		// 	case "list":
		// 		console.log("ruxi")
		// 		break
		// }
	},
	render() {
		return (
			<div className='product_list'>
				{this.props.products.map((product) => {
					return <ProductListItem key={product.id} id={product.id} name={product.name} selected={product.selected} selectOrUnselect={this.props.selectOrUnselectProduct} />
				})}			
			</div>
			)
	}
})

module.exports = ProductList