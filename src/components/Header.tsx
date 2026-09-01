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
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-stone-200">
      <Link to="/" className="flex items-center gap-3">
        <img src={logoGuara} alt="Logo" className="w-10 h-10 object-contain" />
        <h1 className="text-xl font-bold text-orange-600">{titulo}</h1>
      </Link>

      <nav className="flex gap-4">
        {itensMenu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'font-bold text-orange-600'
                : 'text-stone-600 hover:text-orange-600'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}