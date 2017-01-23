import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Provider from 'react-redux';
import Router from 'react-router';
import App from './app.jsx';

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
        <Router>
            <Route path="/" component={App}>
            </Route>
        </Router>
      </Provider>
      , root);
});