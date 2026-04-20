// src/components/Post/PostCard.jsx

function PostCard({ post, onLike, onDelete }) {
    return (
        <article className="post-card">
            <div className="post-header">
                <h3>{post.title}</h3>
                {/* Delete button (Task 16.3 Bonus) */}
                <button 
                    onClick={() => onDelete(post.id)} 
                    className="delete-btn"
                >
                    &times;
                </div>
            </div>
            
            <p>{post.excerpt}</p>
            
            <div className="post-footer">
                <span>By: {post.author}</span>
                
                {/* Like Button (Task 16.4) */}
                <button onClick={() => onLike(post.id)} className="like-btn">
                     ❤ {post.likes}
                </button>
            </div>
        </article>
    );
}

export default PostCard;
