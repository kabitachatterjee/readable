import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { updatePost } from '../actions';
import serializeForm from 'form-serialize';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class UpdatePostForm extends Component {
  static propTypes = {
    post: PropTypes.object,
    categories: PropTypes.array,
    updatePost: PropTypes.func.isRequired
  };

  state = {
    author: this.props.post ? this.props.post.author : '',
    title: this.props.post ? this.props.post.title : '',
    body: this.props.post ? this.props.post.body : '',
    category: this.props.post ? this.props.post.category : '',
    updated: false
  };
  componentDidMount() {
    const { postId } = this.props.match.params;
    console.log(postId);

  }

  handleUpdate = event => {
    event.preventDefault();

    const { updatePost } = this.props;
    const {post} = this.state;

    if (post) {
      const updatedPost = {
        ...post,
        timestamp: Date.now(),
        author: this.state.author,
        body: this.state.body,
        title: this.state.title,
        category: this.state.category
      };
      updatePost(updatedPost);
    }
  }
  render() {
    const { categories,post } = this.props;
    const { updated } = this.state;
    if (updated) {
      return <Redirect to={'/'} />;
    }
    return (
      <div>


        <form onSubmit={this.handleUpdate} className="addFormBar">
        <Link to="/" className="close">Close</Link>
        <h3> Update Post </h3>
          <input  type="text" name="title" placeholder="Title for the post" value={this.state.title} required />
          <input  type="text" name="body" placeholder="Write a post" value={this.state.body} required />
          <input  type="text" name="category" placeholder="Category" value={this.state.category} required />
          <input  type="text" name="author" placeholder="Author" value={this.state.author} required /><br />
          <button class="waves-effect waves-light btn" onClick={this.redirect}>Update</button>

            </form>
            </div>
          )

  }
}

function mapStateToProps({ posts, categories, updatePost }, { match }) {
  return {
    post: posts.filter(post => post.id === match.params.postId)[0],
    // categories: categories.filter(
    //   category => category.path
    // )
    updatePost: updatePost
  };
}

export default connect(mapStateToProps, {updatePost})(UpdatePostForm);
