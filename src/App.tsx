import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UpsellPage from './pages/UpsellPage';
import Upsell2Page from './pages/Upsell2Page';
import BackRedirectPage from './pages/BackRedirectPage';
import { captureUTMs } from './utils/utm';

export default function App() {
  React.useEffect(() => {
    captureUTMs();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upsell" element={<UpsellPage />} />
        <Route path="/upsell2" element={<Upsell2Page />} />
        <Route path="/oferta-especial" element={<BackRedirectPage />} />
        {/* Adicione outras rotas de upsell se necessário, ex: /upsell-2 */}
      </Routes>
    </Router>
  );
}
