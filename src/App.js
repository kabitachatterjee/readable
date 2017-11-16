import React, { Component } from 'react';
import * as API from './utils/api';
import ListCategories from './components/ListCategories';
import ListPosts from './components/ListPosts';
import './App.css';

class App extends Component {
  state = {
    categories: [],
    posts:[]
  }
  componentDidMount() {
    API.getCategories().then((categories) => {
      this.setState({
        categories: categories
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


  render() {
    return (
      <div>
      <ListCategories categories={this.state.categories} />
      <ListPosts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
