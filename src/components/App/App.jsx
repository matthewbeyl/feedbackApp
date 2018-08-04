import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import StyledViewOne from '../ViewOne/ViewOne';
import StyledViewTwo from '../ViewTwo/ViewTwo';
import ViewThree from '../ViewThree/ViewThree';
import ViewFour from '../ViewFour/ViewFour';
import ViewFive from '../ViewFive/ViewFive';
import AdminView from '../AdminView/AdminView';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Redirect exact from="/" to="/1" />
            <Route path="/1" component={StyledViewOne} />
            <Route path="/2" component={StyledViewTwo} />
            <Route path="/3" component={ViewThree} />
            <Route path="/4" component={ViewFour} />
            <Route path="/5" component={ViewFive} />
            <Route path="/admin" component={AdminView} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;