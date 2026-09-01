import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Integrantes from './pages/Integrantes';
import Contato from './pages/Contato';
import Faq from './pages/Faq';


export default function App() {
  const nomeProjeto: string = 'Lobo-guará Tech';

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-amber-50 text-stone-900">
        <Header titulo={nomeProjeto} />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            
            <Route path="/faq" element={<Faq />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}