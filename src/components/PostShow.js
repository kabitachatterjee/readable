import React, { Component } from 'react';
import { getPost } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PostShow extends Component {
  static propTypes = {
    post: PropTypes.object,
    getPost: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { postId } = this.props.match.params;
    console.log(postId);

    this.props.getPost(postId);

  }

  render() {
    const { post } = this.props;
    console.log(post);
    return(
      <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <em> -{post.author}</em> at {post.timestamp}
      </div>
    )
  }

}

function mapStateToProps({ posts }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.postId)[0]
  };
}

export default connect(mapStateToProps, {
  getPost
})(PostShow);

//export default PostShow;
