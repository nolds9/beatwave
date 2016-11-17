import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';
import './index.css';

const tracks = [
  {
    title: 'Some track',
    id: 1
  },
  {
    title: 'Some other track',
    id: 2
  }
]

ReactDOM.render(
  <Stream tracks={tracks} />,
  document.getElementById('root')
);
