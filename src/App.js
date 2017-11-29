import React, { Component } from 'react';
import ListCategories from './components/ListCategories';
import ListPosts from './components/ListPosts';
import AddPostForm from './components/AddPostForm';
import PostShow from './components/PostShow';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={ListCategories} />
      <Route exact path="/:categories" component={ListPosts} />
      <Route exact path="/posts/new" component={AddPostForm} />
      <Route exact path="/:category/:postId" component={PostShow} />

      </div>

    );
  }
}

export default App;
