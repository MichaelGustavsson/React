import React from 'react';
import ReactDOM from 'react-dom/client';

// Importera vår App komponent...
import App from './App';

// Skapa en root reference som refererar/adresserar
// vart vi vill placera våra komponenter...
ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
