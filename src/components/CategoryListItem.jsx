import React from "react"

class CategoryListItem extends React.Component {
    isSelected() {
        for(let i=0; i<this.props.selectedCategories.length; i++) {
            if(this.props.selectedCategories[i] === this.props.id) {
                return true;
            }
        }
        return false
    }
    render() {
        return(
            <div className={`category_list_item ${this.isSelected() ? 'selected' : '' }`} onClick={() => this.props.selectOrUnselectCategory(this)}>
                {this.props.name}
            </div>
        )
    }
}

export default CategoryListItem