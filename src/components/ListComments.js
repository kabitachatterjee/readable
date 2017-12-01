import React, { Component } from 'react';
import { fetchComments } from '../actions';
import PropTypes from 'prop-types';


class ListComments extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };


  render() {
    const { comments } = this.props
    return (
      <div>
      <h3 class="collection-header">List of Comments</h3>
      <ul class="collection">
      {comments.map((comment) => (
                  <li class="collection-item" key={comment.id}>

                    <em>{comment.body}</em>

                  </li>
                 ))}
      </ul>
      </div>
    )
  }
}

export default ListComments;
