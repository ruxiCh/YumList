import React from 'react'
import { render } from 'react-dom'

import Search from './components/Search'
import List from './components/List'

require("./less/style.less");

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: this.props.pages[0],
            products: [],
            categories: [],
            selectedCategories: []
        };
        this.selectOrUnselectProduct = (product) => {
            let selectedValue = true;
            if(product.props.selected === true) {
                selectedValue = false
            }
            let products = this.state.products;
            let productFromState = products.filter((item) =>  item.id === product.props.id)[0];
            productFromState.selected = selectedValue;
            this.setState({products: products})
        };
        this.selectOrUnselectCategory = (categoryListItem) => {
            let selectedCategories = this.state.selectedCategories;
            let category = categoryListItem.props.id;
            if(selectedCategories.length !== 0) {
                for (let i = 0; i < selectedCategories.length; i++) {
                    if (category === selectedCategories[i]) {
                        selectedCategories.splice(i, 1);
                        this.setState({selectedCategories: selectedCategories});
                        return
                    }
                }
            }
            selectedCategories.push(category);
            this.setState({selectedCategories: selectedCategories})
        };
          this.initSelectedProp = (elements) => {
            return elements.map((element) => {
              return Object.assign({selected: false}, element)
            })
          };
        this.getProducts = () => {
            return new Promise((resolves, rejects) => {
                const request = new XMLHttpRequest();
                request.open('GET', './data/products.json');
                request.onload = () => {
                    (request.status === 200) ?
                        resolves(JSON.parse(request.response).products) :
                        rejects(Error(request.statusText))
                };
                request.send()
            })
        };
        this.initProducts = async () => {
            try {
                let products = await this.getProducts();
                products = this.initSelectedProp(products);
                this.setState({products});
            } catch {
                throw new Error("Could not get products!")
            }
        };
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
        };
        this.initCategories = async () => {
            try {
                let categories = await this.getCategories();
                this.setState({categories});
            } catch {
                throw new Error ("Could not get product categories!");
            }
        };
        this.goToPage = (pageName) => {
            let newActivePage = this.props.pages.filter((item) => item.name === pageName)[0];
            this.setState({activePage: newActivePage})
        }
    }

    componentDidMount() {
        this.initProducts();
        this.initCategories();
    }

    render() {
        return (
            <div>
                <this.state.activePage.component products={this.state.products}
                                                 categories={this.state.categories}
                                                 selectedCategories={this.state.selectedCategories}
                                                 selectOrUnselectProduct={this.selectOrUnselectProduct}
                                                 selectOrUnselectCategory={this.selectOrUnselectCategory}
                                                 goToPage={this.goToPage} />
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
};


render(<Main />, document.getElementById("mount"));
