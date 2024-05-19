import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import AddResourceForm from './AddResourceForm';
import Resource from './Resource';

const Module = ({ module, updateModule, deleteModule }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(module.title);

    const addResource = (resource) => {
        const updatedModule = {
            ...module,
            resources: [...module.resources, resource]
        };
        updateModule(updatedModule);
    };

    const updateResource = (updatedResource) => {
        const updatedResources = module.resources.map(resource =>
            resource.id === updatedResource.id ? updatedResource : resource
        );
        updateModule({ ...module, resources: updatedResources });
    };

    const deleteResource = (resourceId) => {
        const updatedResources = module.resources.filter(resource => resource.id !== resourceId);
        updateModule({ ...module, resources: updatedResources });
    };

    return (
        <div style={styles.module}>
            <div style={styles.moduleHeader}>
                {isEditing ? (
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={() => {
                            setIsEditing(false);
                            updateModule({ ...module, title });
                        }}
                        style={styles.input}
                    />
                ) : (
                    <h3>{module.title}</h3>
                )}
                <div style={styles.moduleActions}>
                    <FaEdit onClick={() => setIsEditing(true)} />
                    <FaTrash onClick={() => deleteModule(module.id)} />
                </div>
            </div>
            <AddResourceForm addResource={addResource} />
            {module.resources.map(resource => (
                <Resource
                    key={resource.id}
                    resource={resource}
                    updateResource={updateResource}
                    deleteResource={deleteResource}
                />
            ))}
        </div>
    );
};

const styles = {
    module: {
        background: '#f1f1f1',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        marginBottom: '20px',
        padding: '10px',
    },
    moduleHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    moduleActions: {
        display: 'flex',
        gap: '10px',
    },
    input: {
        flex: '1',
        padding: '5px',
    },
};

export default Module;
