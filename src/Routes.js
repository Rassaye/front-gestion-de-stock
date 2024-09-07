import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Articles from './components/articles';
import ArticleForm from './components/articleForm';
import Categories from './components/categories';
import SignIn from './components/signIn';
import Home from './pages/home';
import Inventory from './pages/inventory';
import Settings from './pages/settings';
import PrivateRoute from './components/privateRoute';

const AppRoutes = () => {
  return (
    
    <Routes>

        <Route path="/signIn" element={<SignIn />} />

        {/* Our private Routes */}

        <Route path="/" element={<PrivateRoute element={<Articles />}/>}/>
        <Route path="/articles" element= {<PrivateRoute element={<Articles />} />}/>
        <Route path="/articleForm" element= {<PrivateRoute element={<ArticleForm />} />}/>
        <Route path="/categories" element={<PrivateRoute element={<Categories />} />}/>
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/inventory" element={<PrivateRoute element={<Inventory />} />}/>
        <Route path="/setting" element={<PrivateRoute element={<Settings />} />} />
      </Routes>
  );
};

export default AppRoutes;
