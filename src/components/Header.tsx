import { Link, NavLink } from 'react-router-dom';
import logoGuara from '../assets/Guara.png';
import type { CabecalhoProps, ItemMenu } from '../types/types';

export default function Header({ titulo }: CabecalhoProps) {
  const itensMenu: ItemMenu[] = [
    { label: 'Início', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Nossa Solução', path: '/solucao' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Integrantes', path: '/integrantes' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <header className="cabecalho">
      <div className="logo-box">
        <Link to="/" className="logo-box">
          <img src={logoGuara} alt="Logo" className="logo-img" />
          <h1 className="logo-titulo">{titulo}</h1>
        </Link>
      </div>

      <nav>
        <ul className="menu-lista">
          {itensMenu.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className="link-menu">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}