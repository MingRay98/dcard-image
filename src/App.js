import React, {Component} from "react";
import Radium, {StyleRoot} from 'radium';
import {withRouter} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import AsyncImage from './component/image/async';
import TopHeader from './component/header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      redirect: false,
    };
    this.menuOpened = true;
    this.ref = null;
  }

  getHomePage = () => {
    return <TopHeader />
  }

  getPages = () => {
    return (
      <Switch>
        <Route path="/popular" render={(props) => <AsyncImage {...props} type={this.state.type} />} />
      </Switch>
    )
  }

  getTypes = (para) => {
    this.setState((ps) => ({...ps, type: para, redirect: true}))
  }

  openMenu = () => {
    console.log(this.ref)
    if (this.menuOpened === true) {
      this.menuOpened = false;
      this.ref.style.display = 'none'
      document.getElementById('openButton').style.display = 'block'
    } else {
      this.menuOpened = true;
      this.ref.style.display = 'flex'
      document.getElementById('openButton').style.display = 'none'
    }
  }

  getRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/popular' />;
    }
  }

  getNavbar = () => {
    return (
      <div>
        <div id='openButton' className='closeButton'
          style={{transform: 'rotate(180deg)', left: '0px', top: '48vh', display: 'none'}}
          onClick={() => this.openMenu()} />
        <div className='NavBar' ref={intput => this.ref = intput}>
          <div className='closeButton' onClick={() => this.openMenu()} />
          <div className='NavButton' onClick={() => this.getTypes('pet')} >寵物</div>
          <div className='NavButton' onClick={() => this.getTypes('relationship')}  >感情</div>
          <div className='NavButton' onClick={() => this.getTypes('acg')} >動漫</div>
          <div className='NavButton' onClick={() => this.getTypes('mood')} >心情</div>
        </div>
      </div >
    )
  }

  render() {
    return (
      <Router>
        <StyleRoot>
          <div className='container'>
            <div className='NavContainer'>
              {this.getNavbar()}
            </div>
            {this.getRedirect()}
            {this.getHomePage()}
            {this.getPages()}
          </div>
        </StyleRoot>
      </Router>
    );
  }
}

export default Radium(App);