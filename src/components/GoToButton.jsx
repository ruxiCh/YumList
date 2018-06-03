import React from 'react'
import { render } from 'react-dom'

var GoToButton = React.createClass({
    render() {
        return(
            <div className="go_to_button" onClick={() => this.props.goToPage(this.props.destination)}>Go To {this.props.destination}</div>
        )
    }
});

module.exports = GoToButton;
