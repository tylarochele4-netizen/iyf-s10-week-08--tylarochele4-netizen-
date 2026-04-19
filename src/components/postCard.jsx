function PostCard({ title, excerpt, author, date }) {
    return (
        <article className="post-card">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <div className="post-meta">
                <span>By: <strong>{author}</strong></span>
                <span>Date: {date}</span>
            </div>
        </article>
    );
}

export default PostCard;
