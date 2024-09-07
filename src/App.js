import React from 'react';
import './App.css';
import AppRoutes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes/>
      </Router>
   </AuthProvider>
  );
}

export default App;
