import React, {Component} from "react";
import styles from './styles'

class pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.dcard.tw/_api/forums/pet/posts?popular=true", {
      mode: "cors"
    })
      .then(res => res.json())
      .then(
        result => {
          const items = this.state.items;
          items.push(result);
          this.setState({
            loading: false,
            items: items
          });
        },
        error => {
          this.setState({
            loading: false,
            error
          });
        }
      );
  }

  render() {
    const {error, loading, items} = this.state;
    return (
      <div style={styles.container}>
        {loading && <div style={styles.loading} >Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {items[0] && items[0].map(post => post.media.map(imgData =>
          <div style={styles.imageDiv}>
            <img style={styles.imageContainer} alt="" src={imgData.url} />
          </div>
        ))}
      </div>
    );
  }
}

export default pet;
