import React, { Component } from 'react'
import { fetchCategories, fetchPosts, deletePost } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ListPosts from './ListPosts';
import { Link } from 'react-router-dom';
import {Button, Icon} from 'react-materialize';
import moment from 'moment';


class ListCategories extends Component {

  static propTypes = {
    posts: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    fetchCategories: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
};

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }

  handleDelete = post => {
    this.props.deletePost(post);
    this.setState({ deleted: true });
  };
render() {
  const { categories, posts, deletePost} = this.props
  console.log(this.props);
  return (
    <div class="container">
      <div class="row card">
        <div class="col s12 m12">
          <h4>List of Categories</h4>
            <ul>

              {categories.map((category,i) => (
                <li key={i} className='subheader'>
                  <Link to={`/${category.path}`}>{category.name} <i class="material-icons">send</i></Link>

                  <ul class="card card-content white-text flow-text blue-grey darken-1">
                  <div class="btn-floating blue right">
                          <Link to={`/posts/new`}>
                          <i class="material-icons">add</i>
                          </Link>
                        </div>
                  {posts.filter(post => post.category === category.name).map((post,i) => (
                              <li key={i}>
                              <Link to={`/${post.category}/${post.id}`}>
                                <p class="card-title">{post.title} </p>
                                <em class="yellow-text right">-{post.author} on {moment(post.timestamp).format(
                                              'Do MMMM YYYY, h:mm a'
                                            )}</em>
                                </Link>
                                <p class="chip purple accent-2">Vote: {post.voteScore}</p>
                                <p class="chip purple accent-2">Comments: {post.commentCount}</p><br/>
                                <Button waves='light'>
                                    <Link to={`${post.id}/edit`}><i class="material-icons">edit</i></Link>
                                </Button>
                           <Button waves='light' onClick={() => this.handleDelete(post)}><i class="material-icons">delete</i></Button>
                           <Button waves='light' onClick={() => this.handleUpVote(post)}><i class="material-icons">thumb_up</i></Button>
                           <Button waves='light' onClick={() => this.handleDownVote(post)}><i class="material-icons">thumb_down</i></Button>
                              </li>
                             ))}
                  </ul>
                    </li>))}
               </ul>
            </div>
          </div>
    </div>
  )
}

}

function mapStateToProps({categories,posts},{ match }) {
  return {
    categories: categories,
    posts: posts
  }
}

export default connect(mapStateToProps,{fetchCategories, fetchPosts, deletePost})(ListCategories);
