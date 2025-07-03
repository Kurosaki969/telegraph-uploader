import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importe le fichier CSS de Tailwind
import App from './App'; // Importe votre composant App principal

// Crée la racine de l'application React et la monte sur l'élément avec l'ID 'root' dans index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
