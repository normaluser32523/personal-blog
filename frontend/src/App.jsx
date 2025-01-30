import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <a href="/">Home</a>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </nav>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;