import React from 'react';

class Pin extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let styles = {
      top: '400px',
      left: '200px'
    };
    return (
      <div className='pin' style={styles}>
      </div>
    )
  }
}

export default Pin;