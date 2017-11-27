import React, { Component } from 'react';
import * as API from './utils/api';
import ListCategories from './components/ListCategories';
import ListPosts from './components/ListPosts';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    categories: [],
    posts:[]
  }
  componentDidMount() {
    API.getCategories().then((categories) => {
      this.setState({
        categories: categories,
        posts:[]
      })
      console.log(this.state.categories)
    })
    API.getPosts().then((posts) => {
      this.setState({
        posts: posts
      })
      console.log(this.state.posts)
    })
  }

  // componentDidMount() {
  //   this.props.fetchPosts();
  //   this.props.fetchCategories();
  // }


  render() {
    console.log(this.props);
    const { categories, posts } = this.props;
    return (
      <div>
      <ListCategories categories={this.state.categories} />
      <ListPosts posts={this.state.posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    categories: state.categories
  }
}

export default connect()(App);
