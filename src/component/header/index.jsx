import React, {Component} from 'react';
import Radium from 'radium';
import styles from './styles'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={styles.container}>Dcard-Image Reader</div>
    );
  }
}

export default Radium(index);