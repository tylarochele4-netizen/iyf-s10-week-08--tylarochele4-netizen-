import React from 'react';
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>CommunityHub</h1>
            </div>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#posts">Posts</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
