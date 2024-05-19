import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddModuleForm from './AddModuleForm';
import Module from './Module';

const CourseBuilder = () => {
    const [modules, setModules] = useState([]);

    const addModule = (title) => {
        const newModule = {
            id: uuidv4(),
            title,
            resources: []
        };
        setModules([...modules, newModule]);
    };

    const updateModule = (updatedModule) => {
        setModules(modules.map(module => module.id === updatedModule.id ? updatedModule : module));
    };

    const deleteModule = (moduleId) => {
        setModules(modules.filter(module => module.id !== moduleId));
    };

    return (
        <div style={styles.courseBuilder}>
            <AddModuleForm addModule={addModule} />
            {modules.map(module => (
                <Module
                    key={module.id}
                    module={module}
                    updateModule={updateModule}
                    deleteModule={deleteModule}
                />
            ))}
        </div>
    );
};

const styles = {
    courseBuilder: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        background: '#ffffff',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default CourseBuilder;
