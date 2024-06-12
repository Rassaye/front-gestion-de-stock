import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './components/articles';
import ArticleForm from './components/articleForm';
import Categories from './components/categories';
import SignIn from './components/signIn';
import ResponsiveAppBar from './components/ResponsiveAppBar'; // Importez le composant de la barre de navigation

const AppRoutes = () => {
  return (
    <Router>
      
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articleForm" element={<ArticleForm />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
