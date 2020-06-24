import React, { Component } from 'react';
import { Router, Route, Switch, Redirect, Link } from 'react-router';
import Demo1 from '../pages/function/demo1/index.jsx';



class Main extends Component {
  render() {
    return (
      <div>
        <Link to="/demo1">demo1</Link>
        <Route exact path="/demo1" component={Demo1}/>
      </div>
    )
  }
}

export default Main;