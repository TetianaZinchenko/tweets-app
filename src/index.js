import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/tweets-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
