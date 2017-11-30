import React, { Component } from 'react';
import { getPost, deletePost } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {Button, Icon} from 'react-materialize';

class PostShow extends Component {
  static propTypes = {
    post: PropTypes.object,
    getPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };
  state = {
      deleted: false
  };
  componentDidMount() {
    const { postId } = this.props.match.params;
    console.log(postId);

    this.props.getPost(postId);

  }
  handleDelete = post => {
    this.props.deletePost(post);
    this.setState({ deleted: true });
  };

  render() {
    const { post } = this.props;
    const { deleted } = this.state;
    console.log(post);
    if (deleted) {
      return (<Redirect to={'/'} />);
    }
    return(
      <div class="row">
      <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
      <span class="card-title">{post.title}</span>
      <p>{post.body}</p>
      <em> -{post.author}</em> at {post.timestamp}
      </div>
      <div class="card-action">
      <Button waves='light'>
      Edit
 </Button><Button waves='light' onClick={() => this.handleDelete(post)}>Delete</Button>
      </div>
          </div>
        </div>
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
  getPost,
  deletePost
})(PostShow);
