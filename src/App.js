import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		counter: 0
	};
	render() {
		return (
			<div data-test="component-app">
				<button data-test="button" onClick={() => this.setState({ counter: this.state.counter + 1 })}>
					Increase
				</button>
				<button
          type="button"
					onClick={() => this.setState({ counter: this.state.counter - 1 })}
					disabled={this.state.counter <=0 ? 'disabled' : ''}
				>
					Decrease
				</button>
				<p data-test="counter-display">The counter is {this.state.counter}</p>
			</div>
		);
	}
}

export default App;
