var React = require("react");
var ReactDOM = require("react-dom");

var Search = require("components/Search");
require("scss/style.scss");

var Main = React.createClass({
    getDefaultProps() {
        return {
            pages: ["Search", "List"],
        }
    },
    getInitialState() {
        return{
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

ReactDOM.render(<Main />, document.getElementById("mount"));