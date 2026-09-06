import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Integrantes from './pages/Integrantes';
import Contato from './pages/Contato';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Solucao from './pages/Solucao';
import Sobre from './pages/Sobre';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-in">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/integrantes/:rm" element={<Integrantes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const nomeProjeto = 'Lobo-guará Tech';

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-amber-50 text-stone-900">
        <Header titulo={nomeProjeto} />

        
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatedRoutes />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}