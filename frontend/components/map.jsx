import React from 'react';
import Pin from './pin';

class Map extends React.Component {

  render() {
    return (
      <div className='map'>
        <Pin />
        <div className='title'>Welcome to world traveler</div>
        <p className='instructions'>Please mark locations on the map to tell the world where you've been!</p>
      </div>
    )
  }
}

export default Map;