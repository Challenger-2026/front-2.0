import type { ReactNode } from 'react';

interface BotaoProps {
  children: ReactNode;
  acao?: () => void;
  tipo?: 'button' | 'submit' | 'reset';
  variante?: 'primario' | 'secundario' | 'escuro';
  desabilitado?: boolean;
  className?: string;
}

export default function Botao({
  children,
  acao,
  tipo = 'button',
  variante = 'primario',
  desabilitado = false,
  className = '',
}: BotaoProps) {
  const base =
    'wave-button px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 inline-flex items-center justify-center select-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer';

  const variantes = {
    primario: 'bg-[#D35400] hover:bg-[#b84500] text-white shadow-sm hover:shadow',
    secundario: 'border border-stone-300 hover:border-[#D35400] hover:text-[#D35400] text-stone-700 bg-transparent',
    escuro: 'bg-[#1C1C1C] hover:bg-stone-800 text-white shadow-sm',
  };

  return (
    <button
      type={tipo}
      onClick={acao}
      disabled={desabilitado}
      className={`${base} ${variantes[variante]} ${className}`}
    >
      {children}
    </button>
  );
}