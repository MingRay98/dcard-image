import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import AsyncImage from './component/image/async';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
    };
  }

  getPages = () => {
    return (
      <Router>
        <Switch>
          <Route path="/pet" render={(props) => <AsyncImage {...props} type={this.state.type} />} />
        </Switch>
      </Router>
    )
  }

  getTypes = (para) => {
    this.setState((ps) => ({...ps, type: para}),()=>{})
  }

  getNavbar = () => {
    return (
      <div>
        <a className='NavButton' onClick={()=>this.getTypes('pet')} href='/pet'>寵物</a>
        <div>美妝</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='NavContainer'>
          {this.getNavbar()}
        </div>
        {this.getPages()}
      </div>
    );
  }
}

export default App;