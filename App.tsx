import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cocktails from './pages/Cocktails';
import CocktailDetail from './pages/CocktailDetail';
import Tutorials from './pages/Tutorials';
import Profile from './pages/Profile';
import Tools from './pages/Tools';
import Assistant from './pages/Assistant';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/cocktail/:id" element={<CocktailDetail />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}