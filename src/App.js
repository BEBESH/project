// src/App.js
import React from 'react';
import CourseBuilder from './components/CourseBuilder';
import DragDropContext from './components/DragDropContext';
import './styles.css';

function App() {
  return (
    <DragDropContext>
      <div className="App">
        <div className="background"></div> {/* Add the background here */}
        <h1>Course Builder</h1>
        <CourseBuilder />
      </div>
    </DragDropContext>
  );
}

export default App;
