import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TodoContextProvider } from './Context/TodoContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodoContextProvider>
);
