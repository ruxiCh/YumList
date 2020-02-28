import React from "react"

import CategoryListItem from "./CategoryListItem"

class CategoryList extends React.Component {
    render() {
        return(
            <div className="category_list">
                {this.props.categories.map((category) => {
                    return <CategoryListItem key={category.id}
                                                id={category.id}
                                                name={category.name}
                                                selectedCategories={this.props.selectedCategories}
                                                selectOrUnselectCategory={this.props.selectOrUnselectCategory} />
                })}
            </div>
        )
    }
}

export default CategoryList