import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Resource = ({ resource, updateResource, deleteResource }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(resource.title);

    return (
        <div style={styles.resource}>
            {isEditing ? (
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={() => {
                        setIsEditing(false);
                        updateResource({ ...resource, title });
                    }}
                    style={styles.input}
                />
            ) : (
                <span>{resource.title}</span>
            )}
            <div style={styles.resourceActions}>
                <FaEdit onClick={() => setIsEditing(true)} />
                <FaTrash onClick={() => deleteResource(resource.id)} />
            </div>
        </div>
    );
};

const styles = {
    resource: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
    },
    resourceActions: {
        display: 'flex',
        gap: '10px',
    },
    input: {
        flex: '1',
        padding: '5px',
    },
};

export default Resource;
