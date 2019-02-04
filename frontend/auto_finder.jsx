import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('root');
  ReactDOM.render(<Counter />, counter);
});