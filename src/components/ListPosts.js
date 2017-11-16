import React, { Component } from 'react'

class ListPosts extends Component {
render() {
  const { posts} = this.props
  return (
    <div>
    <h1>List of Posts</h1>
    <ol>
    {posts.map((post) => (
                <li key={post.id}>
                    <em>{post.title}</em><br/>
                    {post.body}<br/>
                    - {post.author}
                </li>
               ))}
    </ol>
    </div>
  )
}

}
export default ListPosts
