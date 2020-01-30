import React from 'react'
import { render } from 'react-dom'

import Search from './components/Search'
import List from './components/List'

require("./less/style.less")

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activePage: this.props.pages[0],
            products: [],
            categories: [],
            noFilterSelected: true
        }
        this.selectOrUnselectProduct = (product) => {
            let selectedValue = true
            if(product.props.selected === true) {
                selectedValue = false
            }
            let products = this.state.products
            let productFromState = products.filter((item) =>  item.id === product.props.id)[0]
            productFromState.selected = selectedValue
            this.setState({products: products})
        }
        this.getProducts = () => {
            return new Promise((resolves, rejects) => {
                const request = new XMLHttpRequest()
                request.open('GET', './data/products.json')
                request.onload = () => {
                    (request.status === 200) ?
                        resolves(JSON.parse(request.response).products) :
                        rejects(Error(request.statusText))
                }
                request.send()
            })
        }
        this.initSelectedProp = (products) => {
            return products.map((product) => {
                return Object.assign({selected: false}, product)
            })
        }
        this.getCategories = () => {
            return new Promise((resolves, rejects) => {
                const request = new XMLHttpRequest()
                request.open('GET', './data/product_categories.json')
                request.onload = () => {
                    (request.status === 200) ?
                        resolves(JSON.parse(request.response).product_categories) :
                        rejects(Error(request.statusText));
                };
                request.send()
            });
        }
        this.goToPage = (pageName) => {
            let newActivePage = this.props.pages.filter((item) => item.name === pageName)[0]
            this.setState({activePage: newActivePage})
        }
    }

    componentDidMount() {
        this.getProducts().then(
            (productsWithoutSelectedProp) => {
                var products = this.initSelectedProp(productsWithoutSelectedProp)
                this.setState({products: products})
            },
            () => { new Error("Could not get products!")}
        )
        this.getCategories().then(
            (categories) => {
                this.setState({categories: categories})
            },
            () => { new Error ("Could not get product categories!")}
        )
    }
    render() {
        return (
            <div>
                <this.state.activePage.component products={this.state.products} categories={this.state.categories} selectOrUnselectProduct={this.selectOrUnselectProduct} goToPage={this.goToPage} />
            </div>
        )
    }
}

Main.defaultProps = {
    pages: [
        {
            name: "Search",
            component: Search
        },
        {
            name: "List",
            component: List
        }]
}


render(<Main />, document.getElementById("mount"))
