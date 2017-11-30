import React, { Component } from 'react';
import ListCategories from './components/ListCategories';
import ListPosts from './components/ListPosts';
import AddPostForm from './components/AddPostForm';
import UpdatePostForm from './components/UpdatePostForm';
import PostShow from './components/PostShow';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div>
      <Route exact path="/" component={ListCategories} />
      <Route exact path="/:categories" component={ListPosts} />

      <Switch>
          <Route path="/posts/new" component={AddPostForm} />
          <Route exact path="/:category/:postId" component={PostShow} />
          <Route exact path="/:category/:postId/edit" component={UpdatePostForm} />
      </Switch>

      </div>


    );
  }
}

export default App;
