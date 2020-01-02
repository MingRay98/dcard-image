import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import asyncPet from './component/pet/async';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={asyncPet} />
        </Switch>
      </Router>
    );
  }
}

export default App;