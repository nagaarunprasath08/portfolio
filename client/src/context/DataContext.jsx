import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

const initialProjects = [
    {
        id: 1,
        title: 'AAC Alumni Web Portal',
        year: '2025',
        tech: 'React | Node.js | MongoDB',
        desc: [
            'Web-based system for managing alumni records and communication.',
            'Implemented CRUD operations and role-based login.',
            'REST API endpoints for authentication and task management.'
        ],
        link: '#'
    },
    {
        id: 2,
        title: 'AAC Online Assessment System',
        year: '2025',
        tech: 'React | Node.js | MongoDB',
        desc: [
            'Platform for conducting online tests and quizzes.',
            'User roles (Admin, Instructor, Student) with secure authentication.',
            'Question bank management and timer-based assessments.',
            'Real-time analytics for scores and performance reports.'
        ],
        link: '#'
    },
    {
        id: 3,
        title: 'Doc-Based Chatbot (RAG & AI)',
        year: '2025',
        tech: 'Python | OpenAI LLM | LangChain',
        desc: [
            'Chatbot capable of answering queries from uploaded files (PDF, Word).',
            'Implemented Retrieval-Augmented Generation (RAG) pipeline.',
            'Used LangChain for document parsing and retrieval workflows.'
        ],
        link: '#'
    },
    {
        id: 4,
        title: 'Automated Motor Controller (IoT)',
        year: '2024',
        tech: 'IoT Sensors | Arduino | PHP | React',
        desc: [
            'Smart system to remotely control water pumps via mobile app.',
            'Integrated IoT sensors for monitoring water levels.',
            'Presented at IoT Contest, St. Joseph’s College, Trichy.'
        ],
        link: '#'
    },
    {
        id: 5,
        title: 'Automated Answer Evaluation',
        year: '2022',
        tech: 'NLP | Python',
        desc: [
            'Keyword extraction to compare student answers with model answers.',
            'Used cosine similarity and NLP for semantic matching.',
            'Automated scoring and feedback generation.'
        ],
        link: '#'
    }
];

const initialSkills = [
    {
        id: 1,
        title: 'Languages',
        skills: ['Python', 'JavaScript', 'Java', 'PHP', 'SQL']
    },
    {
        id: 2,
        title: 'Web Technologies',
        skills: ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap']
    },
    {
        id: 3,
        title: 'Data & Tools',
        skills: ['MySQL', 'MongoDB', 'SQLite', 'Pandas', 'NumPy', 'Power BI']
    },
    {
        id: 4,
        title: 'Dev Tools',
        skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Blender']
    }
];

export const DataProvider = ({ children }) => {
    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem('portfolio_projects');
        return saved ? JSON.parse(saved) : initialProjects;
    });

    const [skills, setSkills] = useState(() => {
        const saved = localStorage.getItem('portfolio_skills');
        return saved ? JSON.parse(saved) : initialSkills;
    });

    useEffect(() => {
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    }, [projects]);

    useEffect(() => {
        localStorage.setItem('portfolio_skills', JSON.stringify(skills));
    }, [skills]);

    const addProject = (project) => {
        setProjects(prev => [{ ...project, id: Date.now() }, ...prev]);
    };

    const updateProject = (id, updatedProject) => {
        setProjects(prev => prev.map(p => (p.id === id ? { ...updatedProject, id } : p)));
    };

    const deleteProject = (id) => {
        setProjects(prev => prev.filter(p => p.id !== id));
    };

    const addSkill = (category) => {
        setSkills(prev => [...prev, { ...category, id: Date.now() }]);
    };

    const deleteSkill = (id) => {
        setSkills(prev => prev.filter(s => s.id !== id));
    };

    return (
        <DataContext.Provider value={{ projects, skills, addProject, updateProject, deleteProject, addSkill, deleteSkill }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
