import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.incrementCounter = this.incrementCounter.bind(this)
    this.state = {
      counter: 0
    }
  }

  getCount() {
    return this.state.counter;
  }

  incrementCounter() {
    console.log('gets clicked');
    this.setState({
      counter: this.state.counter += 1
    })
  }

  render() {
    return (
      <div>
        <h1>hello wurld</h1>
        <h2>counter: {this.getCount()}</h2>
        <button onClick={this.incrementCounter}>
          click me to add!
        </button>
      </div>
    )
  }
}

export default Counter;