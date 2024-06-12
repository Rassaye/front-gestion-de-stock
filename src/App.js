import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import des modules nécessaires de react-router-dom
import ResponsiveAppBar from './components/ResponsiveAppBar'; // Import du composant ResponsiveAppBar
import SignIn from './components/signIn';
import Articles from './components/articles';
import './App.css';
import AppRoutes from './Routes';

function App() {
  return (
   
      <div>
        <AppRoutes />
       
       
      </div>
  
  );
}

export default App;
