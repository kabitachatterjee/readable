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
        // .then(data => data.posts)
