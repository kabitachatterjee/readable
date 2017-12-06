import React, { Component } from 'react'
import { fetchCategories, fetchPosts } from '../actions';
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
    fetchPosts: PropTypes.func.isRequired

  };

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
  }
render() {
  const { categories,posts} = this.props
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
                                <p>{post.title} <em><span class="white-text right">-{post.author} on {moment(post.timestamp).format(
                                              'Do MMMM YYYY, h:mm a'
                                            )}</span></em></p>
                                </Link>
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

export default connect(mapStateToProps,{fetchCategories, fetchPosts})(ListCategories);
