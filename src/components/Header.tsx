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
    <header className="sticky top-0 z-50 bg-stone-900 text-amber-50 px-4 sm:px-6 py-3 sm:py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logoGuara}
            alt={`Logo ${titulo}`}
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
          />
          <h1 className="text-lg sm:text-xl font-bold text-orange-500 whitespace-nowrap">
            {titulo}
          </h1>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="flex items-center gap-3 sm:gap-6 overflow-x-auto max-w-full pb-1 md:pb-0"
        >
          {itensMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors py-1 ${
                  isActive
                    ? 'text-orange-500 font-bold border-b-2 border-orange-500'
                    : 'text-amber-50 hover:text-orange-400'
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