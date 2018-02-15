import React from "react"
import { render } from "react-dom"

import ProductListItem from "./ProductListItem"

var ProductList = React.createClass({
	getInitialState() {
		return {
			products: []
		}
	},
	getAllProducts() {
		return new Promise((resolves, rejects) => {
			const request = new XMLHttpRequest()
			request.open('GET', './data/products.json')
			request.onload = () => { 
				(request.status === 200) ?
				resolves(JSON.parse(request.response).products) :
				reject(Error(request.statusText))
			}
			request.send()
		})	
	},
	componentWillMount() {
		if (this.props.type === "search") {
			this.getAllProducts().then(
				(products) => {
					this.setState({products: products})
				}, 
				(err) => console.error(new Error("the products cannot be loaded"))
			)
		}
	},
	render() {
		return (
			<div className='product_list'>
				{this.state.products.map((product) => {
					return <ProductListItem key={product.id} name={product.name} selected={false} />
				})}			
			</div>
			)
	}
})

module.exports = ProductList