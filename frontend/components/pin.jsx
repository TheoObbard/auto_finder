import React from 'react';

class Pin extends React.Component {
  constructor(props) {
    super(props)    
    this.state = {
      pinX: this.props.pos[0],
      pinY: this.props.pos[1] 
    }
  }

  render() {
    console.log(this.state);
    
    let styles = {
      top: this.state.pinY + 'px',
      left: this.state.pinX + 'px'
    };
    return (
      <div className='pin' style={styles}>
      </div>
    )
  }
}

export default Pin;