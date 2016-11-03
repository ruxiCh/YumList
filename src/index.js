var React = require("react");
var ReactDOM = require("react-dom");

require("scss/style.scss");

var Hello = React.createClass({
    render() {
        return (
            <div>
                <h1>I'm inside the component wooo LALALA!</h1>
                <div>Heyyyyyy!!!?</div>
                <div className="strawberry"></div>
            </div>
        )
    }
});

ReactDOM.render(<Hello />, document.getElementById("mount"));