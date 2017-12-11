import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { addComment } from '../actions';
import serializeForm from 'form-serialize';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AddCommentForm extends Component {
  static propTypes = {
    post: PropTypes.object,
    comment: PropTypes.object,
    addComment: PropTypes.func.isRequired
  };

  state = {
    author:'',
    body:'',
    commented: false
  };
  componentDidMount() {
    const { postId } = this.props.post;
    console.log(postId);
  }

  handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };

    redirect = () => this.setState({ author:'', body:'', commented: true });
  handleSubmit = (e) => {
    e.preventDefault();
    const { post, comment, addComment } = this.props;
    console.log(this.props.post);

  const newComment = {
      id: v4(),
      timestamp: Date.now(),
      parentId: this.props.post.id,
      author: this.state.author,
      body: this.state.body
    };

    console.log(newComment);
    console.log(this.state);
    if(newComment){
    addComment(newComment);
  }
  this.redirect();
}
  render() {
    const { post,addComment } = this.props;
    const { commented } = this.state;

    if (commented) {
      return <Redirect to={'/'} />;
    }
    return (
      <div>
        <div class="row card">
        <form onSubmit={this.handleSubmit}>
          <div class="col s10 m10">
            <div class="card-content">
              <input placeholder="Write a comment..." s={6} label="Comment" type="text" name="body" value={this.state.body} onChange={this.handleChange('body')} />
              <input placeholder="author" s={6} label="author" type="text" name="author" value={this.state.author} onChange={this.handleChange('author')} required />
              <button class="waves-effect waves-light btn btn-small">Submit</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
}


export default connect(null, { addComment})(AddCommentForm);
