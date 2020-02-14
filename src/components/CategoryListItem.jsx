import React from "react"

class CategoryListItem extends React.Component {
    render() {
        return(
            <div className="category_list_item" onClick={() => this.props.filterProducts(this)}>
                {this.props.name}
            </div>
        )
    }
}

export default CategoryListItem