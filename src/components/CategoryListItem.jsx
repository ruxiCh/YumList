import React from "react";

function CategoryListItem({ id, name, selectedCategories, toggleCategory}) {
  function isSelected() {
    return selectedCategories.some((category) => category === id);
  }

  return (
    <div
      className={`category_list_item ${isSelected() ? "selected" : ""}`}
      onClick={() => toggleCategory(id)}
    >
      {name}
    </div>
  );
}

export default CategoryListItem;
