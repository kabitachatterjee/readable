import React, { Component } from 'react';
import * as API from './utils/api';
import ListCategories from './components/ListCategories';
import ListPosts from './components/ListPosts';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  // state = {
  //   categories: [],
  //   posts:[]
  // }
  // componentDidMount() {
  //   API.getCategories().then((categories) => {
  //     this.setState({
  //       categories: categories
  //     })
  //     console.log(this.state.categories)
  //   })
  //   API.getPosts().then((posts) => {
  //     this.setState({
  //       posts: posts
  //     })
  //     console.log(this.state.posts)
  //   })
  // }

  // componentDidMount() {
  //   this.props.fetchPosts();
  //   this.props.fetchCategories();
  // }


  render() {
    console.log(this.props);
    return (
      <div>Hello World
      </div>
    );
  }
}

export default connect()(App);
