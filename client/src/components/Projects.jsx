import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import { useData } from '../context/DataContext';
import './Projects.css';

const Projects = () => {
    const { projects } = useData();
    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    <AnimatePresence>
                        {projects.slice(0, visibleCount).map((project, index) => (
                            <motion.div
                                key={project.id || index}
                                className="glass-card project-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                layout
                            >
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-year">{project.year}</span>
                                </div>
                                <div className="project-tech">{project.tech}</div>
                                <div className="project-desc">
                                    <ul>
                                        {project.desc.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <a href={project.link} className="project-link">
                                    View Project <FaExternalLinkAlt style={{ fontSize: '0.8rem', marginLeft: '5px' }} />
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {visibleCount < projects.length && (
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <motion.button
                            className="btn btn-outline"
                            onClick={handleLoadMore}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                        >
                            Load More Projects <FaChevronDown />
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
