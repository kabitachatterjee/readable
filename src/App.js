import React, { Component } from 'react';
import ListCategories from './components/ListCategories';
import './App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Route path="/" component={ListCategories} />
      </div>

    );
  }
}

export default App;
