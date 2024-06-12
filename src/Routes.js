import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Articles from './components/articles';
import ArticleForm from './components/articleForm';
import Categories from './components/categories';
import SignIn from './components/signIn';

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articleForm" element={<ArticleForm />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
  );
};

export default AppRoutes;
