import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { addPost } from '../actions';
import serializeForm from 'form-serialize';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AddPostForm extends Component {

  static propTypes = {
    post: PropTypes.object,
    categories: PropTypes.array,
    addPost: PropTypes.func.isRequired
  };

  state = {
    author:'',
    title:'',
    body:'',
    category:'',
    changed: false
  };

redirect = () => this.setState({ changed: true });
handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { addPost } = this.props;
    // const values = serializeForm(e.target,{ hash:true });
    //
    //
    // this.setState((prevState) => {
    //   return {
    //               author: values.author,
    //               body: values.body,
    //               title: values.title,
    //               category: values.category
    //             }
    //             });

    const newPost = {
        id: v4(),
        timestamp: Date.now(),
        author: this.state.author,
        body: this.state.body,
        title: this.state.title,
        category: this.state.category
      };

      console.log(newPost);
      console.log(this.state);
      if(newPost){
      addPost(newPost);
    }

      this.redirect();
  }

  render() {
    const { post,addPost } = this.props;
    const { changed } = this.state;
    if (changed) {
      return <Redirect to={'/'} />;
    }

    return (
      <div>


        <form onSubmit={this.handleSubmit} className="addFormBar">
        <Link to="/" className="close">Close</Link>
        <h3> Add a New Post </h3>
          <input  type="text" name="title" value={this.state.title} onChange={this.handleChange('title')} placeholder="Title for the post" required />
          <input  type="text" name="body" value={this.state.body} onChange={this.handleChange('body')} placeholder="Write a post" required />
          <input  type="text" name="category" value={this.state.category}  onChange={this.handleChange('category')} placeholder="Category" required />
          <input  type="text" name="author" value={this.state.author} onChange={this.handleChange('author')} placeholder="Author" required /><br />
          <button class="waves-effect waves-light btn black">Submit</button>

            </form>
            </div>
          )
        }

}

function mapStateToProps({addPost}) {
  return {
    addPost: addPost
  }
}

export default connect(mapStateToProps,{addPost})(AddPostForm);
