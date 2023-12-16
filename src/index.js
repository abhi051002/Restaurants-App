import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Restrurant from './components/Basics/Restrurant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Restrurant />
  </React.StrictMode>
);