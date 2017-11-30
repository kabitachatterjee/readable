import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListPosts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired

  };

  componentDidMount() {
    this.props.fetchPosts();
  }
render() {
  const { posts} = this.props;
  console.log(this.props);
  return (
    <div>
    <h3 class="collection-header">List of Posts</h3>
    <ul class="collection">
    {posts.map((post) => (
                <li class="collection-item" key={post.id}>
                <Link to={`/${post.category}/${post.id}`}>
                  <em>{post.title}</em>
                  </Link>
                </li>
               ))}
    </ul>
    <div className="open-search">
            <Link to='/posts/new'>Add a post</Link>
          </div>
    </div>
  )
}

}

function mapStateToProps({posts}) {
  return {
    posts: posts
  }
}

export default connect(mapStateToProps,{fetchPosts})(ListPosts);
//export default ListPosts
