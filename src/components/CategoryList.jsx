import React from "react";

import CategoryListItem from "./CategoryListItem";

function CategoryList({categories, selectedCategories, toggleCategory}) {
  return (
    <div className="category_list">
      {categories.map((category) => {
        return (
          <CategoryListItem
            id={category.id}
            key={category.id}
            name={category.name}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
          />
        );
      })}
    </div>
  );
}

export default CategoryList;
