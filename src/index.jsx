import React, { useEffect } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

import Search from "./components/Search";
import List from "./components/List";

require("./less/style.less");

function Main() {
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
  const [activePage, setActivePage] = useState(pages[0]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  function toggleProduct(productId) {
    setProducts((products) => {
      let newProducts = [...products];
      let productFromState = newProducts.find(
        (item) => item.id === productId,
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

const root = createRoot(document.getElementById("mount"));
root.render(<Main />)
