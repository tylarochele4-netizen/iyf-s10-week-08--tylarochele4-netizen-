import { useState } from 'react';

function CreatePost({ onAddPost }) {
    // State for the form inputs
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        // Prevents the browser from reloading the page
        e.preventDefault();

        // Validation: don't submit if fields are empty
        if (!title.trim() || !content.trim()) return;

        // Create the new post object
        const newPost = {
            id: Date.now(), // Unique ID based on time
            title: title,
            excerpt: content,
            author: "You",
            date: new Date().toLocaleDateString(),
            likes: 0
        };

        // Call the function passed down from App.jsx
        onAddPost(newPost);

        // Reset the form fields
        setTitle('');
        setContent('');
    };

    return (
        <section className="create-post">
            <h3>Create a New Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-primary">Share Post</button>
            </form>
        </section>
    );
}

export default CreatePost;
