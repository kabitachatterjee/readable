import React, { Component } from 'react'
import ListPosts from './ListPosts';

class ListCategories extends Component {
render() {
  const { categories,posts} = this.props
  return (
    <div>
    <h1>List of Categories</h1>
    <ul>
    {categories.map((category) => (
                <li key={category.name} className='subheader'>
                    <a href='/:categories/posts'>{category.name}</a>
                    </li>))}
               </ul>
    </div>
  )
}

}
export default ListCategories
