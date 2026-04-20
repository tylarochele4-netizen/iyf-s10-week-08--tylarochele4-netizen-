function UserCard({ name, role, avatarUrl }) {
    // Default avatar if none is provided
    const defaultAvatar = "https://via.placeholder.com/50";

    return (
        <div className="user-card" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            padding: '10px', 
            border: '1px solid #eee', 
            borderRadius: '8px',
            marginBottom: '10px'
        }}>
            <img 
                src={avatarUrl || defaultAvatar} 
                alt={name} 
                style={{ width: '40px', height: '40px', borderRadius: '50%' }} 
            />
            <div>
                <h4 style={{ margin: 0 }}>{name}</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>{role}</p>
            </div>
        </div>
    );
}

export default UserCard;
