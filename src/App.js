import React, { Component } from 'react';
import * as API from './utils/api';
import './App.css';

class App extends Component {
  state = {
    categories: []
  }
  componentDidMount() {
    API.getCategories().then((categories) => {
      this.setState({
        categories: categories
      })
      console.log(this.state.categories)
    })
  }
  render() {
    return (
      <div>
      Hello World!!
      </div>
    );
  }
}

export default App;
