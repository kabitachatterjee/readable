import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class AddPostForm extends Component {

  render() {
    return (
      <div>


        <form className="addFormBar">
        <h3> Add a New Post </h3>
          <input  type="text" name="title" placeholder="Title for the post" />
          <input  type="text" name="body" placeholder="Write a post"/>
          <input  type="text" name="category" placeholder="Category"/>
          <input  type="text" name="author" placeholder="Author"/>
          <Link to="/" className="close">Close</Link>
          <button type="submit" label="Submit" id="submit">Submit</button>
            </form>
            </div>
          )
        }

}
export default AddPostForm;
