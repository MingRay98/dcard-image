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

  getExcerpt = (e) => {
    const element = e.target.parentElement.parentElement.parentElement.childNodes[2]
    console.log(element)
    let x = e.clientX + document.body.scrollLeft + 20;
    let y = e.clientY + document.body.scrollTop - 5;
    element.style.left = x + "px";
    element.style.top = y + "px";
    element.style.display = "block";
  }

  outExcerpt = (e) => {
    const element = e.target.parentElement.parentElement.parentElement.childNodes[2]
    element.style.display = "none";
  }

  componentWillReceiveProps(nextProps) {
    this.setState((ps) => ({...ps, items: [], loading: true}));
    const url = `https://www.dcard.tw/_api/forums/${nextProps.type}/posts?popular=true`
    console.log(url)
    fetch(url, {
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
        {!loading && error && <div>Error: {error.message}</div>}
        {!loading && !error && items[0] && items[0].map(post =>
          <div style={styles.postContainer}>
            <div style={styles.postTitle}>{post.title}</div>
            {post.media.map(imgData =>
              <div>
                <div style={styles.imageDiv}>
                  <a href={`https://www.dcard.tw/f/${this.props.type}/p/${post.id}`} target="_blank">
                    <img style={styles.imageContainer} alt="" src={imgData.url} />
                  </a>
                </div>
                <div style={{display: 'none', position: 'absolute'}}>{post.excerpt}</div>
              </div>
            )}
          </div>)}
      </div>
    );
  }
}

export default pet;
