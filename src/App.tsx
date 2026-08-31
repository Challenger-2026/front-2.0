import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const nomeProjeto: string = "Lobo-guará Tech";

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header titulo={nomeProjeto} />
        
        <main className="conteudo-principal">
          <Routes>
            <Route path="/" element={<h2 className="titulo-pagina">Página Inicial</h2>} />
            <Route path="/sobre" element={<h2 className="titulo-pagina">Sobre o Projeto</h2>} />
            <Route path="/solucao" element={<h2 className="titulo-pagina">Nossa Solução</h2>} />
            <Route path="/faq" element={<h2 className="titulo-pagina">Perguntas Frequentes</h2>} />
            <Route path="/integrantes" element={<h2 className="titulo-pagina">Integrantes</h2>} />
            <Route path="/contato" element={<h2 className="titulo-pagina">Contato</h2>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}