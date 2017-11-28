import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class AddPostForm extends Component {

  render() {
    return (
      <div>


        <form className="addFormBar">
        <h3> Add a New Post </h3>
          <input  type="text" label="Title" placeholder="Title for the post" />
          <input  type="text" label="Body" placeholder="Write a post"/>
          <input  type="text" label="Category" placeholder="Category"/>
          <input  type="text" label="Author" placeholder="Author"/>
          <Link to="/" className="close">Close</Link>
          <input type="submit" label="Submit" id="submit" />
            </form>
            </div>
          )
        }

}
export default AddPostForm;
