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
      <div> Update Post</div>
    )
  }
}

export default UpdatePostForm;
