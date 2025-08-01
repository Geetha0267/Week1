import React from 'react';
import Post from './Post.jsx';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => {
        console.error('Error fetching posts:', error);
        this.setState({ error });
      });
  }

  componentDidCatch(error, info) {
    alert('Something went wrong!');
    console.error('Error caught in componentDidCatch:', error, info);
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Blog Posts</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
