import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './app-routes';

import './assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;