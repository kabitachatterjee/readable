import React, { Component } from 'react';
import { getPost, deletePost, updatePost,fetchComments } from '../actions';
import ListComments from './ListComments';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import {Button, Icon} from 'react-materialize';

class PostShow extends Component {
  static propTypes = {
    post: PropTypes.object,
    comments: PropTypes.array,
    getPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired
  };
  state = {
      deleted: false,
      updated: false,
      voteScore: this.props.post ? this.props.post.voteScore : ''
  };

  componentDidMount() {
    const { postId } = this.props.match.params;
    console.log(postId);

    this.props.getPost(postId);
    this.props.fetchComments(postId);

  }
  handleDelete = post => {
    this.props.deletePost(post);
    this.setState({ deleted: true });
  };
  handleUpdate = post => {
    this.props.updatePost(post);
    this.setState({ updated: true });
  }
  handleUpVote = post => {
    this.setState({ voteScore: parseInt(this.props.post.voteScore) + 1 ,
                    updated: true });
    this.props.updatePost(post);

  }
  handleDownVote = post => {
    this.setState({ voteScore: parseInt(this.props.post.voteScore) - 1 ,
                    updated: true });
    this.props.updatePost(post);

  }

  render() {
    const { post, comments } = this.props;
    const { deleted,voteScore, updated } = this.state;
    console.log(this.state);
    console.log(this.props.comments);

    return(
      <div class="container">
      <div class="row">
      <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
      <span class="card-title">{post.title}</span>
      <p>{post.body}</p>
      <em> -{post.author}</em> on {moment(post.timestamp).format(
                    'Do MMMM YYYY, h:mm a'
                  )} <br/>
      <p>Vote :{post.voteScore}</p>
      <p>Comments: {post.commentCount}</p>
      </div>
      <div class="card-action">
      <Button waves='light'>
          <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
      </Button>
 <Button waves='light' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
 <Button waves='light' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
 <Button waves='light' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
      </div>
      <div class="card-content white-text">
      comments show up here!!

      </div>
          </div>
        </div>
      </div>
      <div class="row">
      <div class="col s12 m6">
      <input placeholder="Write a comment..." s={6} label="Comment" />
      <input placeholder="author" s={6} label="author" />
      </div>
      </div>
      </div>
    )
  }

}

function mapStateToProps({ posts,comments }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.postId)[0],
    comments: comments
  };
}

export default connect(mapStateToProps, {
  getPost,
  deletePost,
  updatePost,
  fetchComments
})(PostShow);
