import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://www.dcard.tw/_api/forums/pet/posts?popular=true', { mode: 'cors' })
      .then(res => res.json())
      .then(
        (result) => {
          const items = this.state.items;
          items.push(result);
          this.setState({
            isLoaded: true,
            items: items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }




  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const items = this.state.items;
      return (
        <div>
          {items[0].map(
            (item) => (
              item.media.map(
                (a) => ( <img alt='' src={a.url} /> )
              )
            )
          )
          }
        </div>
      );
    }
  }
}

export default App;