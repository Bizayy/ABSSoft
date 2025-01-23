'use client'
import React, { Component } from "react";
class CountComponent extends Component<{}, { count: number }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }

    render(): React.ReactNode {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increase Count</button>
            </div>
        );
    }
}

export default CountComponent;
