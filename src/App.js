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
      car: false,
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

  handleSubmit = (event) => {
    event.preventDefault();
    (event.target.querySelector('input').value === '2000' || event.target.querySelector('input').value === 'sex') &&
      this.setState((ps) => ({...ps, car: true}), alert('開車成功'))
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
          <div className='NavButton' onClick={() => this.getTypes('show_cats')} >曬貓</div>
          <div className='NavButton' onClick={() => this.getTypes('meme')} >Meme</div>
          <div className='NavButton' onClick={() => this.getTypes('travel')} >旅遊</div>
          <div className='NavButton' onClick={() => this.getTypes('mood')} >心情</div>
          <div className='NavButton' onClick={() => this.getTypes('acg')} >動漫</div>
          <div className='NavButton' onClick={() => this.getTypes("illustration")} >插畫</div>
          <div className='NavButton' onClick={() => this.getTypes('cosplay')} >COS</div>
          <div className='NavButton' onClick={() => this.getTypes('makeup')} >美妝</div>
          <div className='NavButton' onClick={() => this.getTypes('dressup')} >穿搭</div>
          <div className='NavButton' onClick={() => this.getTypes("otokonoko")} >偽娘</div>
          <div className='NavButton' onClick={() => this.getTypes("photography")} >攝影</div>
          <div className='NavButton' onClick={() => this.getTypes("food")} >食物</div>
          <div className='NavButton' onClick={() => this.getTypes("entertainer")} >追星</div>
          <div className='NavButton' onClick={() => this.getTypes("trending")} >時事</div>
          {this.state.car && <div className='NavButton' onClick={() => this.getTypes("sex")} >西斯</div>}
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} style={{width: '10vw', maxWidth: '125px', margin: '2%', borderRadius: '10px'}} />
            </label>
            <button className='NavButton' type="submit" >GO</button>
          </form>
        </div>
      </div >
    )
  }

  render() {
    return (
      <Router>
        <StyleRoot>
          <div className='topContainer'>
            <TopHeader />
            <div className='container'>
              <div className='NavContainer'>
                {this.getNavbar()}
              </div>
              {this.getRedirect()}
              {this.getPages()}
            </div>
          </div>
        </StyleRoot>
      </Router>
    );
  }
}

export default Radium(App);