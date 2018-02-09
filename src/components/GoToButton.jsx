import React from 'react'
import { render } from 'react-dom'

var GoToButton = React.createClass({
    render() {
        return(
            <div className="go_to_button">Go To {this.props.destination}</div>
        )
    }
});

module.exports = GoToButton;