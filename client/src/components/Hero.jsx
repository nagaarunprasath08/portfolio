import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero">
            {/* Background Blobs */}
            <div className="hero-bg-blob blob-1"></div>
            <div className="hero-bg-blob blob-2"></div>

            <div className="container">
                <div className="hero-container">
                    <div className="hero-content">
                        <motion.span
                            className="hero-greeting"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hello, I'm
                        </motion.span>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            R.Nagaarun <span className="gradient-text">Prasath</span>
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Python Developer & Full Stack Enthusiast building scalable solutions with modern web technologies.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <a href="#projects" className="btn btn-primary">View Projects</a>
                            <a href="#contact" className="btn btn-outline">Contact Me</a>
                            <a href="/resume.pdf" target="_blank" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FaFileDownload /> Resume
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="hero-img-box">
                            <img src={profileImg} alt="R.Nagaarun Prasath" className="hero-img" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
