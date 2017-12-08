import React, { Component } from 'react';
import { getPost, deletePost, updatePost,fetchComments } from '../actions';
import ListComments from './ListComments';
import AddCommentForm from './AddCommentForm';

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

  handleUpVote = post => {
    this.setState({ voteScore: parseInt(this.props.post.voteScore) + 1 });
                    console.log(this.state.voteScore);
                    const updatedPost = {
                      ...post,
                      voteScore: this.state.voteScore
                    };
    this.props.updatePost(updatedPost);

  }
  handleDownVote = post => {
    this.setState({ voteScore: parseInt(this.props.post.voteScore) - 1 });
    const updatedPost = {
      ...post,
      voteScore: this.state.voteScore
    };
this.props.updatePost(updatedPost);

  }

  render() {
    const { post, comments,updatePost } = this.props;
    const { deleted,voteScore, updated } = this.state;
    console.log(this.state);
    console.log(this.props.comments);

    if (deleted) {
      return <Redirect to={'/'} />;
    }
    if (this.props.post.commentCount === 0) {
      return (
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
         0 Comments

        </div>

        </div>
        </div>
        <AddCommentForm post={post} />
        </div>

      );

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
      Comments
      <ul>

      {comments.map((comment,i) => (
                  <li class="collection-item" key={i}>
                  <em>{comment[i].author}: {comment[i].body}</em>


      <div class="card-action">
      <Button waves='light'>
          <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
      </Button>
 <Button waves='light' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
 <Button waves='light' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
 <Button waves='light' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
      </div>
      </li>
      ))}

      </ul>

      </div>

      </div>
      </div>
      <AddCommentForm post={post} />
      </div>
    )
  }

}

function mapStateToProps({ posts,comments }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.postId)[0],
    comments: Object.values(comments)
  };
}

export default connect(mapStateToProps, {
  getPost,
  deletePost,
  updatePost,
  fetchComments
})(PostShow);
