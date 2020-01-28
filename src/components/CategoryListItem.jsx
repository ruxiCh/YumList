import React from "react"

class CategoryListItem extends React.Component {
    render() {
        return(
            <div className="category_list_item">
                {this.props.name}
            </div>
        )
    }
}

export default CategoryListItem