import  { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Enable BrowserRouter for nested routes and future compatibility
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true, // Enable relative splat matching
        v7_startTransition: true,  // Enable startTransition API
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
