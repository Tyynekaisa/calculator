import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import Calculator from './calc';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
