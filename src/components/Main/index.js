import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import Posts from 'containers/Posts';
import Comments from 'containers/Comments';
import Profile from 'containers/Profile';

import './style.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="main">
        <Header />
        <Route path="/posts" component={Posts} />
        <Route path="/comments" component={Comments} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default Main;
