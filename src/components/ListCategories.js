import React, { Component } from 'react'
import { fetchCategories } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ListPosts from './ListPosts';
import { Link } from 'react-router-dom';


class ListCategories extends Component {

  static propTypes = {
    categories: PropTypes.array.isRequired,
    fetchCategories: PropTypes.func.isRequired

  };

  componentDidMount() {
    this.props.fetchCategories();
  }
render() {
  const { categories} = this.props
  console.log(this.props);
  return (
    <div>
    <h1>List of Categories</h1>
    <ul>
    {categories.map((category) => (
                <li key={category.name} className='subheader'>
                  <Link to='/{category.path}'>{category.name}</Link>
                    </li>))}
               </ul>
               
    </div>
  )
}

}

function mapStateToProps({categories}) {
  return {
    categories: categories
  }
}

export default connect(mapStateToProps,{fetchCategories})(ListCategories);
