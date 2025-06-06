import React, { useEffect } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

import Search from "./components/Search";
import List from "./components/List";

require("./less/style.less");

const pages = [
  {
    name: "Search",
    component: Search,
  },
  {
    name: "List",
    component: List,
  },
];

function Main({ pages = pages }) {
  const [activePage, setActivePage] = useState(pages[0]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  function toggleProduct(product) {
    setProducts((products) => {
      let newProducts = [...products];
      let productFromState = newProducts.find(
        (item) => item.id === product.props.id,
      );
      productFromState.selected = !productFromState.selected;
      return newProducts;
    });
  }

  function toggleCategory(category) {
    setSelectedCategories((selectedCategories) => {
      let newSelectedCategories = [...selectedCategories];
      const categoryIndex = selectedCategories.indexOf(category);
      if (categoryIndex !== -1) {
        newSelectedCategories.splice(categoryIndex, 1);
      } else {
        newSelectedCategories.push(category);
      }
      return newSelectedCategories;
    });
  }

  async function getData(dataType) {
    try {
      const response = await fetch(`/data/${dataType}.json`);

      if (!response.ok) {
        throw Error(`Could not retrieve ${dataType}!`);
      }

      return await response.json();
    } catch (error) {
      console.error(error.message);
    }
  }

  function goToPage(pageName) {
    setActivePage(pages.find((page) => page.name === pageName));
  }

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData("products");
      setProducts(products.map((product) => ({ ...product, selected: false })));
  
      setCategories(await getData("categories"));
    }; 
    
    fetchData();
  }, []);

  return (
    <div>
     {selectedCategories.map((category) => category )}
      <activePage.component
        products={products}
        categories={categories}
        selectedCategories={selectedCategories}
        toggleProduct={toggleProduct}
        toggleCategory={toggleCategory}
        goToPage={goToPage}
      ></activePage.component>
    </div>
  );
}

class Mainnn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.pages[0],
      products: [],
      categories: [],
      selectedCategories: [],
    };
    this.selectOrUnselectProduct = (product) => {
      let selectedValue = true;
      if (product.props.selected === true) {
        selectedValue = false;
      }
      let products = this.state.products;
      let productFromState = products.filter(
        (item) => item.id === product.props.id,
      )[0];
      productFromState.selected = selectedValue;
      this.setState({ products: products });
    };
    this.selectOrUnselectCategory = (categoryListItem) => {
      let selectedCategories = this.state.selectedCategories;
      let category = categoryListItem.props.id;
      if (selectedCategories.length !== 0) {
        for (let i = 0; i < selectedCategories.length; i++) {
          if (category === selectedCategories[i]) {
            selectedCategories.splice(i, 1);
            this.setState({ selectedCategories: selectedCategories });
            return;
          }
        }
      }
      selectedCategories.push(category);
      this.setState({ selectedCategories: selectedCategories });
    };
    this.getProducts = () => {
      return new Promise((resolves, rejects) => {
        const request = new XMLHttpRequest();
        request.open("GET", "./data/products.json");
        request.onload = () => {
          request.status === 200
            ? resolves(JSON.parse(request.response).products)
            : rejects(Error(request.statusText));
        };
        request.send();
      });
    };
    this.initSelectedProp = (elements) => {
      return elements.map((element) => {
        return Object.assign({ selected: false }, element);
      });
    };
    this.getCategories = () => {
      return new Promise((resolves, rejects) => {
        const request = new XMLHttpRequest();
        request.open("GET", "./data/product_categories.json");
        request.onload = () => {
          request.status === 200
            ? resolves(JSON.parse(request.response).product_categories)
            : rejects(Error(request.statusText));
        };
        request.send();
      });
    };
    this.goToPage = (pageName) => {
      let newActivePage = this.props.pages.filter(
        (item) => item.name === pageName,
      )[0];
      this.setState({ activePage: newActivePage });
    };
  }

  componentDidMount() {
    this.getProducts().then(
      (products) => {
        products = this.initSelectedProp(products);
        this.setState({ products: products });
      },
      () => {
        new Error("Could not get products!");
      },
    );
    this.getCategories().then(
      (categories) => {
        this.setState({ categories: categories });
      },
      () => {
        new Error("Could not get product categories!");
      },
    );
  }
  render() {
    return (
      <div>
        <this.state.activePage.component
          products={this.state.products}
          categories={this.state.categories}
          selectedCategories={this.state.selectedCategories}
          selectOrUnselectProduct={this.selectOrUnselectProduct}
          selectOrUnselectCategory={this.selectOrUnselectCategory}
          goToPage={this.goToPage}
        />
      </div>
    );
  }
}

Main.defaultProps = {
  pages: [
    {
      name: "Search",
      component: Search,
    },
    {
      name: "List",
      component: List,
    },
  ],
};

const root = createRoot(document.getElementById("mount"));
root.render(<Main />)
