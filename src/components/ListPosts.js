import React, { Component } from 'react';
import { fetchPosts } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
    <div class="container">
      <div class="row card">
        <div class="col s12 m12">
        <div class="btn-floating blue right">
                <Link to={`/posts/new`}>
                <i class="material-icons">add</i>
                </Link>
              </div>
          <h4>List of Posts</h4>

            <ul class="card card-content white-text flow-text blue-grey darken-1">

              {posts.map((post,i) => (
                <li key={i}>

                  <p>{post.title} <span class="chip yellow darken-1">
                  <Link to={`/${post.category}/${post.id}`}>READ MORE</Link></span></p>
                  <em class="yellow-text right"><p>-{post.author} on {moment(post.timestamp).format(
                                            'Do MMMM YYYY, h:mm a'
                                          )}</p></em>

                              <p class="chip purple accent-2">Vote: {post.voteScore} </p>
                              <p class="chip purple accent-2">Comments: {post.commentCount}</p><br/>

                </li>
               ))}
              </ul>
          </div>
  </div>
</div>
)
}

}

function mapStateToProps({posts},{ match }) {
  return {
    posts: posts.filter(post => post.category === match.params.categories)
  }
}

export default connect(mapStateToProps,{fetchPosts})(ListPosts);
