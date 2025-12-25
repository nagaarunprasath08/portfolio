import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </div>
            <div className="container footer-content">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                    <a href="https://github.com/nagaarunprasath" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}><FaGithub /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}><FaLinkedin /></a>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} R.Nagaarun Prasath. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
