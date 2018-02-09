import React from 'react'
import { render } from 'react-dom'

import GoToButton from "./GoToButton"

var Search = React.createClass({
        displayName: "Search",
        render() {
            return(
                <div>
                    <header>
                        <div className="logo"></div>
                        <GoToButton destination = "List" />
                    </header>
                </div>
            )
        }
    });

module.exports = Search;
