import React, {Component} from "react";
import Radium from 'radium';
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
    this.getDcardAPIPost(nextProps.type)
  }

  componentDidMount() {
    if (window.location.pathname === '/dcard-image/')
      this.getDcardAPIPost('home');
    else {
      let type = window.location.pathname.split('/');
      this.getDcardAPIPost(type[2]);
    }
  }



  getDcardAPIPost = (nextProps) => {
    this.setState((ps) => ({...ps, items: [], error: null, loading: true}));
    let url = `https://script.google.com/macros/s/AKfycbxsSAtVNsiUD1W8tVVqwhxrHesDxBJlm4aXYkEnIHKyAZRIc68s/exec?url=https://www.dcard.tw/_api/forums/${nextProps}/posts?popular=true`
    if (nextProps === 'home' || nextProps === '')
      url = 'https://script.google.com/macros/s/AKfycbxsSAtVNsiUD1W8tVVqwhxrHesDxBJlm4aXYkEnIHKyAZRIc68s/exec?url=https://www.dcard.tw/_api/posts?popular=true';
    fetch(url, {
      mode: "cors",
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

  loaded = (e) => {
    e.style.background = 'none';
  }

  handleImageLoad = (e) => {
    e.target.addEventListener('load', this.loaded(e.target))
    e.target.addEventListener('error', function () {
      alert('error')
    })
  }

  getGenderStyle = (gender) => {
    let style = {
      width: '25px',
      display: 'inline-block',
      borderRadius: '50px',
    }
    gender === 'F' ? Object.assign(style, {
      background: 'pink',
    }) : Object.assign(style, {
      background: 'blue',
      color: 'white',
    })
    return style
  }

  render() {
    const {error, loading, items} = this.state;
    return (
      <div style={styles.container}>
        {loading && <div style={styles.loading} >Loading...</div>}
        {!loading && this.props.type && <div style={styles.loading} >{this.props.type}</div>}
        {!loading && !this.props.type && <div style={styles.loading} >即時熱門文章</div>}
        {!loading && error && <div>Error: {error.message}</div>}
        {!loading && !error && items && !items[0].error && items[0].map(post =>
          <div style={styles.postContainer} key={post.createdAt}>
            <div style={styles.postTitle} key={post.id}
              onClick={() => window.open(`https://www.dcard.tw/f/${post.forumAlias}/p/${post.id}`)} target="_blank">
              <div style={this.getGenderStyle(post.gender)}>{post.gender}</div>{post.title}
              <div style={styles.school} key={'Name_' + post.id}>{window.innerWidth < 600 && <br />}
                {post.anonymousSchool === false && post.school} {post.anonymousDepartment === false && post.department}
                <div style={{color: 'red', fontStyle: 'normal'}} key={'love_' + post.id}> {"　" + post.likeCount} ❤ </div>
              </div>
            </div>
            {post.media.map((imgData, index) =>
              <div key={index + 1}>
                <div key={imgData.url + index} style={styles.imageDiv}>
                  <a style={{display: 'flex'}} href={imgData.url} target="_blank">
                    <img style={styles.imageContainer} alt="" src={imgData.url} onLoad={(e) => this.handleImageLoad(e)} />
                  </a>
                </div>
              </div>
            )}
            {post.withImages === false && post.excerpt != false && <div style={styles.postExcerpt} >{post.excerpt}... <div style={{color: 'red'}} onClick={() => alert('騙你的，你要點標題')}>(閱覽全部)</div></div>}
          </div>)}
      </div>
    );
  }
}

export default Radium(pet);
