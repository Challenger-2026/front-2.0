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
    <header className="sticky top-0 z-50 bg-stone-900 text-amber-50 px-6 py-4 flex items-center justify-between shadow-md">
     
      <Link to="/" className="flex items-center gap-3">
        <img src={logoGuara} alt="Logo" className="w-10 h-10 object-contain" />
        <h1 className="text-xl font-bold text-orange-500">{titulo}</h1>
      </Link>

     
      <nav className="flex items-center gap-6">
        {itensMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-semibold transition-colors ${
                isActive
                  ? 'text-orange-500 font-bold border-b-2 border-orange-500 pb-1'
                  : 'text-amber-50 hover:text-orange-400'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}