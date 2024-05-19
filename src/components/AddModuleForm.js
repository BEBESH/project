import React, { useState } from 'react';

const AddModuleForm = ({ addModule }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addModule(title);
            setTitle('');
        }
    };

    return (
        <div className="container">
            <h2 className="title">Add a New Module</h2>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="New Module Title"
                    className="input"
                />
                <button type="submit" className="button">Add Module</button>
            </form>
        </div>
    );
};

export default AddModuleForm;

// CSS styles
const styles = `
.container {
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    background-color: #f1f1f1;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.form {
    display: flex;
    gap: 10px;
    align-items: center;
}

.input {
    flex: 1;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ced4da;
    font-size: 16px;
    transition: border-color 0.3s, box-shadow 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

.input:focus {
    border-color: #28a745;
    outline: none;
    box-shadow: 0 0 8px rgba(40, 167, 69, 0.6);
}

.button {
    padding: 10px 20px;
    border: none;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
`;

// Apply the styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
