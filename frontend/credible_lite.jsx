import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';

import { Provider } from 'react-redux';
import { Router, Route, hashHistory} from 'react-router';
import App from './app.jsx';
import Results from './results/components';
import NewSubmission from './submissions/components/new';
import SelectedOffers from './selected_offers/components/';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  window.store = store; 

  // window.localStorage.set('offers', [8]);
  // window.localStorage.get('offers'); 

  const root = document.getElementById('root');
  ReactDOM.render(
      <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
              <Route path="/results" component={Results} />
              <Route path="/new-submission" component={NewSubmission} />
              <Route path="/selected-offers" component={SelectedOffers} />
            </Route>
        </Router>
      </Provider>
      , root);
});