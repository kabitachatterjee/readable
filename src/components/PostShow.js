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
    //updatePost: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired
  };
  state = {
      deleted: false,
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
  // handleUpdate = post => {
  //   this.props.updatePost(post);
  //   this.setState({ updated: true });
  // }
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
    if (deleted || updated) {
      return <Redirect to={'/'} />;
    }

    return(
      <div class="container">
      <div class="row card">
      <div class="col s12 m12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
      <span class="card-title">{post.title}</span>
      <p>{post.body}</p>
      <em class="yellow-text right"> -{post.author} on {moment(post.timestamp).format(
                    'Do MMMM YYYY, h:mm a'
                  )}</em> <br/>
      <p class="chip purple accent-2">Vote: {post.voteScore}</p>
      <p class="chip purple accent-2">Comments: {post.commentCount}</p>
      </div>
      <div class="card-action">
      <Button waves='light'>
          <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
      </Button>
 <Button waves='light' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
 <Button waves='light' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
 <Button waves='light' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
      </div>

          </div>
        </div>
      </div>
      <div class="row card">
      <div class="col s12 m12">
      <div class="card-content blue-text">
      <ul>
      <li><span class="black-text">author:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <div class="card-action">
      <Button waves='light'>
          <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
      </Button>
 <Button waves='light' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
 <Button waves='light' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
 <Button waves='light' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
      </div>
      </li>
      <li><span class="black-text">author:</span>comments show up here!!
      <div class="card-action">
      <Button waves='light'>
          <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
      </Button>
 <Button waves='light' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
 <Button waves='light' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
 <Button waves='light' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
      </div>
      </li>
      <li><span class="black-text">author:</span>comments show up here!!
      <div class="card-action">
      <Button waves='light'>
          <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
      </Button>
 <Button waves='light' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
 <Button waves='light' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
 <Button waves='light' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
      </div>
      </li>
      <li><span class="black-text">author:</span>comments show up here!!
      <div class="card-action">
      <Button waves='light'>
          <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
      </Button>
 <Button waves='light' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
 <Button waves='light' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
 <Button waves='light' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
      </div>
      </li>
      </ul>

      </div>

      </div>
      </div>
      <div class="row card">
      <div class="col s10 m10">
      <div class="card-content">
      <input placeholder="Write a comment..." s={6} label="Comment" />
      <input placeholder="author" s={6} label="author" />
      <button class="waves-effect waves-light btn btn-small">Submit</button>
      </div>
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
