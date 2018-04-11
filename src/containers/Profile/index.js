import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'components/Panel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as postActionCreators from 'actions/posts';

const propTypes = {
  postActions: PropTypes.object.isRequired,
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componendDidMount() {
    const { postActions } = this.props;
    postActions.fetchPosts();
  }

  render() {
    return (
      <div className="posts">
        <Panel
          title="Posts"
        />
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { posts } = state;
  return {
    posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActionCreators, dispatch),
  };
}

Profile.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Profile);