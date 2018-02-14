import React from "react"
import { render } from "react-dom"

import ProductListItem from "./ProductListItem"

var ProductList = React.createClass({
	getInitialState() {
		return {
			products: ["rice", "strawberries", "black beans"]
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
	getProducts(current_product_names) {
		this.getAllProducts().then(
				(all_products) => {
					return all_products.filter((product) => {
						return current_product_names.includes(product.name)
					});
				},
				(err) => console.error(new Error("the products cannot be loaded"))
			)
	},
	componentWillMount() {
		this.setState({productData: this.getProducts(this.state.products)});
	},
	render() {
		// this.getProducts(this.state.products).then((products) => console.log(products))
		return (
			<div className='product_list'>
				{this.state.productData.map((product) => {
					return <ProductListItem id="{product.id}" name="{product.name}" selected="false" />
				})}			
			}
			</div>
			)
	}
})

module.exports = ProductList