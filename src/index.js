import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library
import './index.css'; // Import a CSS file (assumed to be named 'index.css')
import App from './App'; // Import the 'App' component
import reportWebVitals from './reportWebVitals'; // Import a function for reporting web vitals

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root to attach the React application

// Render the 'App' component within the root with React Strict Mode enabled
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); // Report web vitals data
