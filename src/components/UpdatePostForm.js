import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { addPost } from '../actions';
import serializeForm from 'form-serialize';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class UpdatePostForm extends Component {
  render() {
    return (
      <div>


        <form onSubmit={this.handleSubmit} className="addFormBar">
        <Link to="/" className="close">Close</Link>
        <h3> Update Post </h3>
          <input  type="text" name="title" placeholder="Title for the post" required />
          <input  type="text" name="body" placeholder="Write a post" required />
          <input  type="text" name="category" placeholder="Category" required />
          <input  type="text" name="author" placeholder="Author" required /><br />
          <button class="waves-effect waves-light btn" onClick={this.redirect}>Update</button>

            </form>
            </div>
          )

  }
}

export default UpdatePostForm;
