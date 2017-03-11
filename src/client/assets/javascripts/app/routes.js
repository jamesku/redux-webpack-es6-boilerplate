import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import App from './App';
import FriendsView from '../features/friends/components/FriendsView';
import NotFoundView from './components/NotFound';
import MovieSearch from './containers/MovieSearch.js';
import Wall from './containers/wall';
import TopBar from './containers/header';

export default (
  <div>
    <TopBar />
    <Router history={browserHistory} >
      <Route path="/" component={Wall} />
      <Route path="/users" component={TopBar}>
        <Route path="/user/:userId" component={Wall} />
      </Route>
      <Route path="*" component={Wall} />
    </Router>
  </div>

  );

  // /*
  // <Route path="/" component={App}>
  //   <IndexRoute component={FriendsView} />
  //   <Route path="404" component={NotFoundView} />
  //   <Redirect from="*" to="404" />
  // </Route>
  // */
