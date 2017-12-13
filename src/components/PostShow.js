import React, { Component } from 'react';
import { getPost, deletePost, updatePost,fetchComments, deleteComment } from '../actions';
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
    fetchComments: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired
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
                    console.log(this.state.voteScore);
                    const updatedPost = {
                      ...post,
                      voteScore: post.voteScore + 1
                    };
    this.props.updatePost(updatedPost);

  }
  handleDownVote = post => {
    const updatedPost = {
      ...post,
      voteScore: post.voteScore - 1
    };
this.props.updatePost(updatedPost);

  }

  handleDeleteComment = comment => {
  console.log(comment[0].id);
  this.props.deleteComment(comment[0]);
  this.setState({ deleted: true });
};

  render() {
    const { post, comments, updatePost, deleteComment } = this.props;
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
        <Button waves='light' className='light-blue'>
            <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
        </Button>
   <Button waves='light' className='light-blue' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
   <Button waves='light' className='light-blue' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
   <Button waves='light' className='light-blue' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
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
      <Button waves='light' className='light-blue'>
          <Link to={`${post.id}/edit`} style={{ textDecoration: 'none' }}><i class="material-icons">edit</i></Link>
      </Button>
 <Button waves='light' className='light-blue' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
 <Button waves='light' className='light-blue' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
 <Button waves='light' className='light-blue' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
      </div>

          </div>
        </div>
      </div>
      <div>{`${post.commentCount} comments`} </div>
      <ListComments comments={comments} handleDeleteComment={this.handleDeleteComment} />
      <AddCommentForm post={post} />
      </div>
    )
  }

}

function mapStateToProps({ posts,comments }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.postId)[0],
    //comments: Object.values(comments).filter(comment => comment.parentId === match.params.postId)
    comments: Object.values(comments)
    //comments: comments
  };
}

export default connect(mapStateToProps, {
  getPost,
  deletePost,
  updatePost,
  fetchComments,
  deleteComment
})(PostShow);
