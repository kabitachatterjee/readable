import React, { Component } from 'react';
import { fetchComments } from '../actions';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import {Button, Icon} from 'react-materialize';


class ListComments extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    handleDeleteComment: PropTypes.func.isRequired
  };


  render() {
    const { comments, handleDeleteComment } = this.props
    console.log(this.props.comments[0])
    return (
      <div class="row card">
        <div class="col s12 m12">
          <div class="card-content blue-text">
              <ul>
                {comments.map((comment,i) => (
                  <li key={i}>

                    <em>{comment[i].author}: {comment[i].body}</em>
                    <div class="card-action">
                    <Button waves='light'>
                        <Link to={`/comments/${comment[i].id}/edit`}><i class="material-icons">edit</i></Link>
                    </Button>
               <Button waves='light' onClick={() => handleDeleteComment(comment)}><i class="material-icons">delete</i></Button>
               <Button waves='light' onClick={() => this.handleUpVote(comment)}><i class="material-icons">thumb_up</i></Button>
               <Button waves='light' onClick={() => this.handleDownVote(comment)}><i class="material-icons">thumb_down</i></Button>
                    </div>

                  </li>
                 ))}
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default ListComments;
