import React, { Component } from 'react';
import ListCategories from './components/ListCategories';
import ListPosts from './components/ListPosts';
import AddPostForm from './components/AddPostForm';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={ListCategories} />
      <Route exact path="/:categories" component={ListPosts} />
      <Route exact path="/posts/new" component={AddPostForm} />

      </div>

    );
  }
}

export default App;
