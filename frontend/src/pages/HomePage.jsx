import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './style/HomePage.css'
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
      fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts');
        setPosts(response.data);
        console.log(response)
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleDelete = async (postId) => {
      try {
      await axios.delete(`http://localhost:5000/posts/${postId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
    };
    
    const handlePostCreated = (newPost) => {
        setPosts([newPost, ...posts]);
    };

  return (
    <div className="page">
      <header className="page-header">
        <h1>Personal Blog</h1>
        {user ? (
          <>
            <p>Welcome to the Blog {user.email}</p>
            <PostForm onPostCreated={handlePostCreated} />
            <PostList posts={posts} />
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </header>

      <section>
        <h2>All Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post card">
              <h3 className="card-title">{post.content}</h3>
              {post.mediaUrl && <img src={post.mediaUrl} alt="Post media" />}
              <p>Author: {post.User?.email || 'Unknown'}</p>
              <p>Date: {new Date(post.createdAt).toLocaleString()}</p>
              {user && user.id === post.userId && (
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              )}
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;