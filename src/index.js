var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({
    render() {
        return (
            <div>Heyyyyyy!!!</div>
        )
    }
});

ReactDOM.render(<Hello />, document.getElementById("mount"));