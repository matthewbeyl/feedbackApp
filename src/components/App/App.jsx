import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import ViewOne from '../ViewOne/ViewOne';
import ViewTwo from '../ViewTwo/ViewTwo';
import ViewThree from '../ViewThree/ViewThree';
import ViewFour from '../ViewFour/ViewFour';
import ViewFive from '../ViewFive/ViewFive';
import AdminView from '../AdminView/AdminView';
import NotFound from '../NotFound/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback for Donuts</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <br />
          </div>
          <Switch>
            <Redirect exact from="/" to="/viewOne" />
            <Route path="/viewOne" component={ViewOne} />
            <Route path="/viewTwo" component={ViewTwo} />
            <Route path="/viewThree" component={ViewThree} />
            <Route path="/viewFour" component={ViewFour} />
            <Route path="/viewFive" component={ViewFive} />
            <Route path="/adminView" component={AdminView} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;