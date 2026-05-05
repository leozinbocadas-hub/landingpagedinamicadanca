import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UpsellPage from './pages/UpsellPage';
import BackRedirectPage from './pages/BackRedirectPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upsell" element={<UpsellPage />} />
        <Route path="/oferta-especial" element={<BackRedirectPage />} />
        {/* Adicione outras rotas de upsell se necessário, ex: /upsell-2 */}
      </Routes>
    </Router>
  );
}
