import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { addComment } from '../actions';
import serializeForm from 'form-serialize';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AddCommentForm extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default AddCommentForm;
