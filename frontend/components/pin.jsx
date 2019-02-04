import React from 'react';

class Pin extends React.Component {
  constructor(props) {
    super(props)    
    this.state = {
      // pinX: this.props.pos[0],
      // pinY: this.props.pos[1] 
      pinX: 100,
      pinY: 100 
    }
  }

  render() {
    console.log(this.props);
    
    let styles = {
      top: this.state.pinY + 'px',
      left: this.state.pinX + 'px'
    };
    if (this.props.X && this.props.Y) {
      return (
        <div onClick={this.handleClick()} className='pin' style={styles}>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Pin;