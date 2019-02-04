import React from 'react';
import Pin from './pin';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this._onMouseMove = this._onMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
    this.pins = []
  }

  _onMouseMove(e) {    
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });    
  }

  handleClick(e) {     
    console.log(this.state.x, this.state.y);
       
    this.pins.push(
      <Pin pos={[this.state.x, this.state.y]}/>
    )
  }

  fetchPins() {    
    this.pins.forEach(pin => {
      return pin;
    })    
  }

  render() {
    const pins = this.pins.forEach(pin => {
      return pin;
    })  

    return (
      <div className='map' onClick={() => this.handleClick()} onMouseMove={this._onMouseMove.bind(this)}>
        <ul>
          {this.pins}
        </ul>
        <div className='title'>Welcome to world traveler</div>
        <p className='instructions'>Please mark locations on the map to tell the world where you've been!</p>
      </div>
    )
  }
}

export default Map;