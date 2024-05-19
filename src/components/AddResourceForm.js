import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddResourceForm = ({ addResource }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('link');

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const newResource = {
                id: uuidv4(),
                title: file.name,
                type: 'file',
                file
            };
            addResource(newResource);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'link' && title.trim()) {
            const newResource = {
                id: uuidv4(),
                title,
                type,
                url: title
            };
            addResource(newResource);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <select value={type} onChange={(e) => setType(e.target.value)} className="select">
                <option value="link">Link</option>
                <option value="file">File</option>
            </select>
            {type === 'link' ? (
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Resource Link"
                    className="input"
                />
            ) : (
                <input type="file" onChange={handleFileUpload} className="input" />
            )}
            <button type="submit" className="button">Add Resource</button>
        </form>
    );
};

export default AddResourceForm;

// CSS styles
const styles = `
.form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.input,
.select {
    flex: 1;
    padding: 5px;
}

.button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 4px;
}
`;

// Apply the styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
