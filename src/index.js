import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './stores/configureStore'
import * as actions from './actions'
import Stream from './containers/Stream';
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

const store = configureStore()
store.dispatch(actions.setTracks(tracks))

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('root')
);
