import React from "react";

function ProductListItem({id, name, selected, toggle}) {
  const imageSrc = `./src/img/${name.replace(" ", "_")}.jpg`;

  return (
    <div
      className={`product_list_item ${selected ? "selected" : ""}`}
      onClick={() => toggle(id)}
    >
      <img src={imageSrc} />
      <div className="overlay">
        <h4 className="product_name">{name}</h4>
      </div>
      <div className="fa fa-check-circle"></div>
    </div>
  );
}

class ProductListItemmm extends React.Component {
  render() {
    const imageSrc = `./src/img/${this.props.name.replace(" ", "_")}.jpg`;
    return (
      <div
        className={`product_list_item ${this.props.selected ? "selected" : ""}`}
        onClick={() => this.props.toggle(this)}
      >
        <img src={imageSrc} />
        <div className="overlay">
          <h4 className="product_name">{this.props.name}</h4>
        </div>
        <div className="fa fa-check-circle"></div>
      </div>
    );
  }
}

export default ProductListItem;
