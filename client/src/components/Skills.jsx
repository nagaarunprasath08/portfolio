import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { useData } from '../context/DataContext';
import './Skills.css';

const Skills = () => {
    const { skills } = useData();

    const getIcon = (title) => {
        if (title.toLowerCase().includes('web')) return <FaServer />;
        if (title.toLowerCase().includes('data')) return <FaDatabase />;
        if (title.toLowerCase().includes('tool')) return <FaTools />;
        return <FaCode />;
    };

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            className="glass-card skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                                <span className="gradient-text" style={{ fontSize: '1.5rem' }}>
                                    {category.icon || getIcon(category.title)}
                                </span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {Array.isArray(category.skills) ? category.skills.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                )) : category.skills.split(',').map(s => <span key={s} className="skill-tag">{s.trim()}</span>)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
