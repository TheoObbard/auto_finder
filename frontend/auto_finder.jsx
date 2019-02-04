import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map';

document.addEventListener('DOMContentLoaded', () => {
  const map = document.getElementById('root');
  ReactDOM.render(<Map />, map);
});