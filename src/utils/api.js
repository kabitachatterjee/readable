const url = 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'auth'
}

export const getCategories = () =>
  fetch(`${url}/categories`, { headers })
    .then(res => res.json())
     .then(data => data.categories)

    export const getPosts = () =>
      fetch(`${url}/posts`, { headers })
        .then(res => res.json())

        export const addPost = post =>
          fetch(`${url}/posts`, {
            method: 'POST',
            headers: {
              ...headers,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
          }).then(res => res.json());

          export const getPost = id =>
  fetch(`${url}/posts/${id}`, { headers }).then(res => res.json());

  export const deletePost = id =>
  fetch(`${url}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers
    }
  });

  export const updatePost = post =>
  fetch(`${url}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());
