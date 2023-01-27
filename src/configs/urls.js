const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
    albums: '/albums',
    comments: '/comments',
    posts: (id) => `/posts/${id}`,
    todos: '/todos'
}

export {
    baseURL,
    urls
}