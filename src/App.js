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
      <AsyncImage  type={this.state.type} />
    )
  }

  getTypes = (para) => {
    this.setState((ps) => ({...ps, type: para}))
  }

  getNavbar = () => {
    return (
      <div className='NavBar'>
        <div className='NavButton' onClick={() => this.getTypes('pet')} >寵物</div>
        <div className='NavButton' onClick={() => this.getTypes('relationship')} >感情</div>
        <div className='NavButton' onClick={() => this.getTypes('acg')} >動漫</div>
        <div className='NavButton' onClick={() => this.getTypes('mood')} >心情</div>
      </div>
    )
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <div className='NavContainer'>
          {this.getNavbar()}
        </div>
        {this.getPages()}
      </div>
    );
  }
}

export default App;