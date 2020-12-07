// Importing React, any components/stylesheets
import React from 'react';
import './App.css';
import Body from './components/Body'

// Creating App function & returning the elements we want to send to the page
function App() {
  return (
    <div className="App">
        <Body/>
    </div>
  );
}

// Export App out of App.jsx
export default App;
