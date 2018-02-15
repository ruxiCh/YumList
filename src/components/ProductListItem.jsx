import React from 'react'
import { render } from 'react-dom'

const ProductListItem = React.createClass({
	selectOrDeselect() {
		if(this.props.selected === true) {
			console.log("selected!")
		} else {
			console.log("not selected!")
		}	
	},
	render() {
		const imageSrc = `./src/img/${this.props.name.replace(' ', '_')}.jpg`
		return (
			<div className={`product_list_item ${this.props.selected ? 'selected' : ''}`} onClick={this.selectOrDeselect}>
				<img src={imageSrc} />
				<div className="overlay">
					<h4 className="product_name">{this.props.name}</h4>
				</div>
			</div>
			)
	}
})

module.exports = ProductListItem