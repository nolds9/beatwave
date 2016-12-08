import 'whatwg-fetch'
import SC from 'soundcloud'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {Provider} from 'react-redux'
import configureStore from './stores/configureStore'
import App from './containers/App'
import Callback from './containers/Callback'
import Stream from './containers/Stream';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth'

// TODO: enable historyApiFallback in devServer webpack config
SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI})

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Stream} />
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
