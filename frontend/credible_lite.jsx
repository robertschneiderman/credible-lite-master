import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';

import { Provider } from 'react-redux';
import { Router, Route, hashHistory} from 'react-router';
import App from './app.jsx';
import NewSubmission from './submissions/components/new';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  window.store = store;  

  const root = document.getElementById('root');
  ReactDOM.render(
      <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
              <Route path="/new-submission" component={NewSubmission} />
            </Route>
        </Router>
      </Provider>
      , root);
});