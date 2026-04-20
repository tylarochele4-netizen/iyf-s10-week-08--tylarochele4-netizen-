import Button from '../shared/Button';

function UserProfile({ user }) {
    // If no user data is passed, show a loading or error state
    if (!user) return <p>Loading profile...</p>;

    return (
        <section className="user-profile" style={{
            padding: '20px',
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            textAlign: 'center'
        }}>
            <img 
                src={user.avatarUrl || "https://via.placeholder.com/150"} 
                alt={user.name} 
                style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '50%', 
                    border: '4px solid #3498db',
                    marginBottom: '15px'
                }} 
            />
            <h2>{user.name}</h2>
            <p style={{ color: '#7f8c8d', fontWeight: '600' }}>{user.role}</p>
            
            <div className="user-bio" style={{ margin: '20px 0', lineHeight: '1.6' }}>
                <p>{user.bio || "This user hasn't written a bio yet."}</p>
            </div>

            <div className="user-stats" style={{ 
                display: 'flex', 
                justifyContent: 'space-around', 
                borderTop: '1px solid #eee', 
                paddingTop: '15px',
                marginBottom: '20px'
            }}>
                <div>
                    <strong>{user.postsCount || 0}</strong>
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>Posts</p>
                </div>
                <div>
                    <strong>{user.likesCount || 0}</strong>
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>Likes</p>
                </div>
            </div>

            <Button text="Edit Profile" variant="secondary" size="small" />
        </section>
    );
}

export default UserProfile;
