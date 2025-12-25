import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import './Admin.css';

const Admin = () => {
    const { projects, addProject, updateProject, deleteProject, skills, addSkill, deleteSkill } = useData();

    // Project Form State
    const [newProject, setNewProject] = useState({
        title: '', year: '', tech: '', desc: '', link: '#'
    });
    const [editingProjectId, setEditingProjectId] = useState(null);

    // Skill Form State
    const [newSkill, setNewSkill] = useState({
        title: '', skills: ''
    });

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        if (!newProject.title) return;

        const projectData = {
            ...newProject,
            desc: typeof newProject.desc === 'string' ? newProject.desc.split('\n').filter(line => line.trim() !== '') : newProject.desc
        };

        if (editingProjectId) {
            updateProject(editingProjectId, projectData);
            setEditingProjectId(null);
        } else {
            addProject(projectData);
        }
        setNewProject({ title: '', year: '', tech: '', desc: '', link: '#' });
    };

    const handleEditProject = (project) => {
        setNewProject({
            ...project,
            desc: Array.isArray(project.desc) ? project.desc.join('\n') : project.desc
        });
        setEditingProjectId(project.id);
    };

    const handleCancelEdit = () => {
        setNewProject({ title: '', year: '', tech: '', desc: '', link: '#' });
        setEditingProjectId(null);
    };

    const handleSkillSubmit = (e) => {
        e.preventDefault();
        if (!newSkill.title) return;
        addSkill({
            ...newSkill,
            skills: newSkill.skills.split(',').map(s => s.trim())
        });
        setNewSkill({ title: '', skills: '' });
    };

    return (
        <section className="admin-container container">
            <div className="admin-header">
                <h1 className="gradient-text">Admin Dashboard</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Manage your portfolio content here. Changes are saved locally.</p>
            </div>

            <div className="admin-grid">
                {/* Project Manager */}
                <div className="admin-section">
                    <h2 style={{ marginBottom: '1.5rem' }}>{editingProjectId ? 'Edit Project' : 'Manage Projects'}</h2>

                    <form className="admin-form" onSubmit={handleProjectSubmit}>
                        <div className="form-group">
                            <label>Project Title</label>
                            <input
                                type="text"
                                className="form-input"
                                value={newProject.title}
                                onChange={e => setNewProject({ ...newProject, title: e.target.value })}
                                placeholder="e.g. AI Chatbot"
                            />
                        </div>
                        <div className="form-group">
                            <label>Year</label>
                            <input
                                type="text"
                                className="form-input"
                                value={newProject.year}
                                onChange={e => setNewProject({ ...newProject, year: e.target.value })}
                                placeholder="2025"
                            />
                        </div>
                        <div className="form-group">
                            <label>Tech Stack</label>
                            <input
                                type="text"
                                className="form-input"
                                value={newProject.tech}
                                onChange={e => setNewProject({ ...newProject, tech: e.target.value })}
                                placeholder="React | Node.js"
                            />
                        </div>
                        <div className="form-group">
                            <label>Project Link</label>
                            <input
                                type="text"
                                className="form-input"
                                value={newProject.link}
                                onChange={e => setNewProject({ ...newProject, link: e.target.value })}
                                placeholder="https://example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label>Description (One per line)</label>
                            <textarea
                                className="form-textarea"
                                value={newProject.desc}
                                onChange={e => setNewProject({ ...newProject, desc: e.target.value })}
                                placeholder="Feature 1..."
                                style={{ minHeight: '100px' }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                                {editingProjectId ? 'Update Project' : 'Add Project'}
                            </button>
                            {editingProjectId && (
                                <button type="button" onClick={handleCancelEdit} className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-primary)' }}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>

                    <div className="admin-list" style={{ marginTop: '2rem' }}>
                        {projects.map(p => (
                            <div key={p.id} className="admin-list-item">
                                <div style={{ flex: 1 }}>
                                    <strong>{p.title}</strong>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{p.year}</div>
                                    {p.link && p.link !== '#' && (
                                        <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', display: 'block', marginTop: '4px' }}>
                                            Visit Link
                                        </a>
                                    )}
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button
                                        onClick={() => handleEditProject(p)}
                                        style={{
                                            background: 'var(--accent-primary)',
                                            color: 'white',
                                            border: 'none',
                                            padding: '5px 10px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button className="delete-btn" onClick={() => deleteProject(p.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skill Manager */}
                <div className="admin-section">
                    <h2 style={{ marginBottom: '1.5rem' }}>Manage Skills</h2>

                    <form className="admin-form" onSubmit={handleSkillSubmit}>
                        <div className="form-group">
                            <label>Category Title</label>
                            <input
                                type="text"
                                className="form-input"
                                value={newSkill.title}
                                onChange={e => setNewSkill({ ...newSkill, title: e.target.value })}
                                placeholder="e.g. Cloud Computing"
                            />
                        </div>
                        <div className="form-group">
                            <label>Skills (Comma separated)</label>
                            <input
                                type="text"
                                className="form-input"
                                value={newSkill.skills}
                                onChange={e => setNewSkill({ ...newSkill, skills: e.target.value })}
                                placeholder="AWS, Docker, Kubernetes"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                            Add Skill Category
                        </button>
                    </form>

                    <div className="admin-list" style={{ marginTop: '2rem' }}>
                        {skills.map(s => (
                            <div key={s.id} className="admin-list-item">
                                <div>
                                    <strong>{s.title}</strong>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                        {Array.isArray(s.skills) ? s.skills.join(', ') : s.skills}
                                    </div>
                                </div>
                                <button className="delete-btn" onClick={() => deleteSkill(s.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;
