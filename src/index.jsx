import React from 'react'
import { render } from 'react-dom'

import Search from './components/Search'
// import all from './less/style'
require("./less/style.less")


var Main = React.createClass({
    getDefaultProps() {
        return {
            pages: [Search, "List"],
        }
    },
    getInitialState() {
        return {
            activePage: this.props.pages[0]
        }
    },
    render() {
        return (
            <div>
                <this.state.activePage  />
            </div>
        )
    }
});

render(<Main />, document.getElementById("mount"));