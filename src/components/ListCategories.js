import React, { Component } from 'react'

class ListCategories extends Component {
render() {
  const { categories} = this.props
  return (
    <div>
    <h1>List of Categories</h1>
    <ol>
    {categories.map((category) => (
                <li key={category.name}>
                    {category.name}
                </li>
               ))}
    </ol>
    </div>
  )
}

}
export default ListCategories
