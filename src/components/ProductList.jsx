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
	unselectAllProducts(products) {
		return products.map((product) => {
			var productWithSelectedProp = Object.assign({selected: false}, product)
			return productWithSelectedProp
		})
	},
	componentWillMount() {
		if (this.props.type === "search") {
			this.getAllProducts().then(
				(products) => {
					products = this.unselectAllProducts(products)
					this.setState({products: products})
				}, 
				(err) => console.error(new Error("the products cannot be loaded"))
			)
		}
	},
	selectOrUnselectProduct(product) {
		let selectedValue = true
		if(product.props.selected === true) {
			selectedValue = false
		}
		let products = this.state.products
		let productFromProducts = products.filter((item) =>  item.id === product.props.id)[0]
		productFromProducts.selected = selectedValue;
		this.setState({products: products})
	},
	render() {
		return (
			<div className='product_list'>
				{this.state.products.map((product) => {
					return <ProductListItem key={product.id} id={product.id} name={product.name} selected={product.selected} selectOrUnselect={this.selectOrUnselectProduct} />
				})}			
			</div>
			)
	}
})

module.exports = ProductList