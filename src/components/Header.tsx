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
    <header className="site-header sticky top-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4">
        
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logoGuara}
            alt={`Logo ${titulo}`}
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
          />
          <div>
            <p className="text-lg sm:text-xl font-extrabold text-[#a84312]">{titulo}</p>
            <p className="text-xs text-[#35685b]">Tecnologia que cuida do amanhã</p>
          </div>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="navbar"
        >
          {itensMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `wave-button nav-link text-xs sm:text-sm font-bold whitespace-nowrap ${
                  isActive
                    ? 'nav-link-active'
                    : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}