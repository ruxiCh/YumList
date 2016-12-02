var React = require("react");
var ReactDOM = require("react-dom");

var GoToButton = require("./GoToButton");

var Search = React.createClass({
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
