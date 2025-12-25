import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ paddingBottom: '150px' }}>
            <div className="container">
                <motion.h2
                    className="section-title gradient-text"
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Let's Connect</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-info-item">
                            <div className="contact-icon"><FaEnvelope /></div>
                            <a href="mailto:nagaarunprasath@gmail.com">nagaarunprasath@gmail.com</a>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon"><FaPhone /></div>
                            <a href="tel:+917397704090">+91 73977 04090</a>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon"><FaMapMarkerAlt /></div>
                            <span>Madurai, Tamil Nadu, India</span>
                        </div>
                    </motion.div>

                    <motion.form
                        className="glass-card contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-input" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-input" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-textarea" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            Send Message <FaPaperPlane />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
