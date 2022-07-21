import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecipeProvider } from './context/RecipeContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>
);
