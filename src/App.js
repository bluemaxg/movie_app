import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        count: 0,
    };

    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };

    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };

    mul = () => {
        this.setState(current => ({ count: current.count * 2 }));
    };

    render() {
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
                <button onClick={this.mul}>Mul</button>
            </div>
        );
    }
}

export default App;
