import React from 'react'

class GoToButton extends React.Component {
    render() {
        return(
            <div className="go_to_button" onClick={() => this.props.goToPage(this.props.destination)}>Go To {this.props.destination}</div>
        )
    }
}

export default GoToButton;
