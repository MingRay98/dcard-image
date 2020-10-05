import React, {Component} from 'react';
import Radium from 'radium';
import styles from './styles'
import {createBrowserHistory} from 'history';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={styles.container}>
        <div onClick={() => {let history = createBrowserHistory(); history.push('/dcard-image/'); this.props.getTypes('')}}>Dcard-Image Reader</div>
        {/* <label style={{fontSize: '12px'}}><input type="radio" name="color1" value="blue" />熱門</label>
        <label style={{fontSize: '12px'}}><input type="radio" name="color1" value="blue" />最新</label> */}
      </div>
    );
  }
}

export default Radium(index);