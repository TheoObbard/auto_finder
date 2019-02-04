import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  getCount() {
    return this.state.counter;
  }

  render() {
    return (
      <div>
        <h1>hello wurld</h1>
        <h2>counter: {this.getCount()}</h2>
      </div>
    )
  }
}

export default Counter;