import { useState } from 'react';
import './App.css';

// Layout Imports
import Layout from './components/Layout/Layout';

// Post Feature Imports
import PostList from './components/Post/PostList';
import CreatePost from './components/Post/CreatePost';

// User Feature Imports
import UserProfile from './components/User/UserProfile';
import UserCard from './components/User/UserCard';

// Shared Components
import Button from './components/shared/Button';

function App() {
  // 1. STATE: The source of truth for our posts
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: "Welcome", 
      excerpt: "We are learning React state and folder", 
      author: "Tyla Rochele", 
      date: "2026-04-19", 
      likes: 5 
    }
  ]);

  // 2. LOGIC: Add a new post (Lifting State Up)
  const addPost = (newPost) => {
    // We use the spread operator [...] to create a NEW array (Never mutate!)
    setPosts([newPost, ...posts]);
  };

  // 3. LOGIC: Handle Likes
  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // 4. LOGIC: Handle Delete
  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  // Mock user data for the Profile
  const currentUser = {
    name: "Student Developer",
    role: "IYF Academy Member",
    bio: "Building the CommunityHub frontend with React.",
    postsCount: posts.length,
    likesCount: posts.reduce((sum, p) => sum + p.likes, 0)
  };

  return (
    <Layout>
      <div className="dashboard-grid" style={{ display: 'flex', gap: '30px' }}>
        
        {/* Left Column: Feed */}
        <section style={{ flex: 2 }}>
          <CreatePost onAddPost={addPost} />
          <hr style={{ margin: '30px 0', border: '0.5px solid #eee' }} />
          <h2>Community Feed</h2>
          <PostList 
            posts={posts} 
            onLike={handleLike} 
            onDelete={handleDelete} 
          />
        </section>

        {/* Right Column: User Info & Sidebar */}
        <aside style={{ flex: 1 }}>
          <UserProfile user={currentUser} />
          <div style={{ marginTop: '20px' }}>
            <h3>Active Members</h3>
            <UserCard name="Sasha Monroe" role="Mentor" />
            <UserCard name="Alby Smith" role="Student" />
            <Button text="View All Members" variant="secondary" size="small" />
          </div>
        </aside>

      </div>
    </Layout>
  );
}

export default App;
