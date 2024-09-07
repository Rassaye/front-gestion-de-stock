import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Articles from './components/articles';
import ArticleForm from './components/articleForm';
import Categories from './components/categories';
import SignIn from './components/signIn';
import Home from './pages/home';
import Inventory from './pages/inventory';
import Settings from './pages/settings';

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articleForm" element={<ArticleForm />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
  );
};

export default AppRoutes;
