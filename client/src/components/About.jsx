import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
    const customTransition = { type: 'spring', stiffness: 100 };

    const education = [
        {
            degree: 'Master of Computer Applications (MCA)',
            school: 'Arul Anandar College (Autonomous)',
            year: '2023 - 2025',
            grade: 'CGPA: 81.4'
        },
        {
            degree: 'Bachelor of Information Technology (B.Sc)',
            school: 'Arul Anandar College (Autonomous)',
            year: '2020 - 2023',
            grade: 'CGPA: 78'
        },
        {
            degree: 'Higher Secondary (XII)',
            school: 'Vivekananda Higher Secondary School',
            year: '2019 - 2020',
            grade: '68%'
        }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title gradient-text" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>About Me</h2>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            I am a recent graduate with a strong foundation in computer science and a passion for building software solutions.
                            My journey involves working with a diverse set of technologies including Python, JavaScript, SQL, and modern web frameworks.
                        </p>
                        <p>
                            I thrive on problem-solving and am always eager to learn new tools to deliver efficient, scalable applications.
                            With a focus on both backend logic and frontend experience, I aim to contribute meaningfully to dynamic software teams.
                        </p>
                        <p>
                            Beyond coding, I have demonstrated leadership and innovation through various academic projects and competitions,
                            securing top positions in paper presentations and animation contests.
                        </p>
                    </motion.div>

                    <div className="about-education">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaGraduationCap className="gradient-text" /> Education
                        </h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="glass-card education-card"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3>{edu.degree}</h3>
                                <div className="institution">{edu.school}</div>
                                <div className="year">{edu.year}</div>
                                <div className="grade">{edu.grade}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
