import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheet.css';
import Services from './Services';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';

const App = () => {
    return (
        <Router>
            <div className="app">
                <header>
                    <h1>Welcome to Chamleon</h1>
                    <nav>
                        <ul>
                            <li><a href="/">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Services />} />
                        <Route path="/contact" element={<ContactForm />} />
                        <Route path="/thank-you" element={<ThankYou />} />
                    </Routes>
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()} Chamleon. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
