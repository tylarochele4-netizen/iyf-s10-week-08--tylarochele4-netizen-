import React, { useState } from 'react';
import './App.css';

// Imports (Ensure these paths match your sidebar exactly!)
import Layout from './components/Layout/Layout';
import Footer from './components/Layout/Footer';
import PostList from './components/Post/PostList';
import CreatePost from './components/Post/CreatePost';
import UserProfile from './components/User/UserProfile';

function App() {
  // 1. Initial State for Posts
  const [posts, setPosts] = useState([
    { id: 1, title: 'Welcome!', excerpt: 'This is the first post on the Hub.', author: 'Admin', likes: 5 },
    { id: 2, title: 'React is Fun', excerpt: 'Learning components today.', author: 'Student', likes: 2 }
  ]);

  // 2. Initial State for User
  const [currentUser] = useState({
    name: 'Student Developer',
    role: 'IYF Academy Member',
    bio: 'Building the CommunityHub frontend with React.',
    postsCount: 1,
    likesCount: 7
  });

  // 3. Handlers for Actions
  const handleAddPost = (newPost) => {
    const postWithId = { ...newPost, id: Date.now(), likes: 0 };
    setPosts([postWithId, ...posts]);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  // 4. The Layout Return
  return (
    <div className="app-container">
      <header>
        <h1>CommunityHub</h1>
      </header>
      
      <main className="main-layout">
        <section className="feed">
          <CreatePost onAddPost={handleAddPost} />
          <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
        </section>

        <aside className="sidebar">
  <UserProfile user={currentUser} />
  
  {/* The Community Members Card */}
  <div className="post-card">
    <h3>Community Members</h3>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>🟢 Sasha Monroe</li>
      <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>🟢 Alby Smith</li>
      <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>🟢 Jordan Vance</li>
      <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>⚪ Casey Wright</li>
      <li style={{ padding: '8px 0' }}>🟢 Riley Ford</li>
    </ul>
  </div>

  <div className="post-card">
    <h3>Quick Links</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li><a href="#" className="link-item">Tutorials</a></li>
      <li><a href="#" className="link-item">Latest News</a></li>
      <li><a href="#" className="link-item">Support</a></li>
    </ul>
  </div>
</aside>
      </main> {/* Line 80: This closes your main-layout */}

      <Footer /> 
    </div> 
  );
}

export default App;