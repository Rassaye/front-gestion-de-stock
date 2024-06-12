import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import des modules nécessaires de react-router-dom
import ResponsiveAppBar from './components/ResponsiveAppBar'; // Import du composant ResponsiveAppBar

import './App.css';
import AppRoutes from './Routes';

function App() {
  return (
   
    <Router>
      <div> 
          <ResponsiveAppBar />
          <AppRoutes />   
      </div>
    </Router> 
  
  );
}

export default App;
