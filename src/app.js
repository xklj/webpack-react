import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from './pages/login/index.jsx'

const newHistory = createBrowserHistory();


const App = () => (
  <Router history={newHistory}>
    <Redirect from='/' to='/login' />
    <Route path="/login" component={Login}></Route>
  </Router>
)

export default App;
