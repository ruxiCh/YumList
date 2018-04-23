import React from 'react'
import { render } from 'react-dom'

import Search from './components/Search'
import List from './components/List'

// import all from './less/style'
require("./less/style.less")


var Main = React.createClass({
    getDefaultProps() {
        return {
            pages: [Search, List],
        }
    },
    getInitialState() {
        return {
            activePage: this.props.pages[0],
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
    setProductsSelectedProp(products) {
        return products.map((product) => {
            var productWithSelectedProp = Object.assign({selected: false}, product)
            return productWithSelectedProp
        })
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
    goToPage(page) {
        this.setState({activePage: page})
    },
    componentWillMount() {
        this.getAllProducts().then(
            (productsWithoutSelectedProp) => {
                var products = this.setProductsSelectedProp(productsWithoutSelectedProp)
                this.setState({products: products})
            },
            (error) => { new Error("Could not get products!")})
    },
    render() {
        return (
            <div>
                <this.state.activePage products={this.state.products} selectOrUnselectProduct={this.selectOrUnselectProduct} activePage={this.activePage} goToPage={this.goToPage} />
            </div>
        )
    }
});

render(<Main />, document.getElementById("mount"));
