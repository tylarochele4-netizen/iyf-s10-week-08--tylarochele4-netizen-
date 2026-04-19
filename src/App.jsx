import Layout from './components/Layout';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Button from './components/Button';

function App() {
  return (
    <Layout>
      <div style={{ display: 'flex', gap: '20px' }}>
        <section style={{ flex: 2 }}>
          <h2>Community Posts</h2>
          <PostCard 
            title="Welcome to React" 
            excerpt="Learning components is fun!" 
            author="Tyla Rochele" 
            date="2026-04-18" 
          />
          <Button text="Load More" variant="primary" />
        </section>
        
        <div style={{ flex: 1 }}>
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
}

export default App;
