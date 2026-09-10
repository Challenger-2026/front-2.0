import { Link } from 'react-router-dom';
import logoGuara from '../assets/Guara.png';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="site-footer w-full mt-auto px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link to="/" className="inline-flex items-center gap-2 text-[#a84312]">
            <img src={logoGuara} alt="" className="w-9 h-9 object-contain shrink-0" />
            <div>
              <p className="font-extrabold text-base">Lobo-guará Tech</p>
              <p className="text-xs text-[#35685b]">Natureza inspira. Tecnologia transforma.</p>
            </div>
          </Link>

          <nav aria-label="Navegação do rodapé" className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
            <Link className="footer-link py-1" to="/sobre">Sobre</Link>
            <Link className="footer-link py-1" to="/solucao">Solução</Link>
            <Link className="footer-link py-1" to="/integrantes">Equipe</Link>
            <Link className="footer-link py-1" to="/contato">Contato</Link>
          </nav>
        </div>

        <div className="footer-bottom mt-3 pt-3 text-center text-xs">
          <p>&copy; {anoAtual} Lobo-guará Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
