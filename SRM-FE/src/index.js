import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';
<<<<<<< HEAD
import './component/style-component.scss'



const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
=======
import './component/style-component.scss';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
>>>>>>> 9017120 (commit)
