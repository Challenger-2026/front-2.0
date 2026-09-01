import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Integrantes from './Pages/Integrantes'; 
import Contato from './Pages/Contato';
import Faq from './Pages/Faq';

export default function App() {
  const nomeProjeto: string = "Lobo-guará Tech";


  
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header titulo={nomeProjeto} />
        
        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<h2>Página Inicial</h2>} />
            <Route path="/sobre" element={<h2>Sobre o Projeto</h2>} />
            <Route path="/solucao" element={<h2>Nossa Solução</h2>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/integrantes" element={<Integrantes/>} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}