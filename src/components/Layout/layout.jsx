import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Layout({ children }) {
    return (
        <div className="app-layout">
            <Header />
            <div className="content-wrapper" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                <main className="main-content" style={{ flex: 3 }}>
                    {children}
                </main>
                <aside className="sidebar-container" style={{ flex: 1 }}>
                    <Sidebar />
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
