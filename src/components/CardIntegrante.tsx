import type { MouseEvent } from 'react';
import type { IntegranteProps } from '../types/types';
import iconeGithub from '../assets/github.svg';
import iconeLinkedin from '../assets/linkedin.svg';

export default function CardIntegrante({
  nome,
  rm,
  turma,
  foto,
  github,
  linkedin,
}: IntegranteProps) {
  function barrarPropagacao(e: MouseEvent<HTMLAnchorElement>) {
    e.stopPropagation();
  }

  return (
    <article className="group bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-orange-600 transition-all duration-300 flex flex-col items-center text-center">
      <div className="relative mb-4">
        <img
          src={foto}
          alt={`Foto de ${nome}`}
          className="w-28 h-28 rounded-full object-cover border-2 border-stone-100 group-hover:border-orange-600 transition-colors shadow-sm"
        />
      </div>

      <h3 className="text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors mb-2">
        {nome}
      </h3>

      <div className="bg-stone-50 rounded-xl py-2 px-4 w-full mb-6 border border-stone-100 space-y-1 text-xs sm:text-sm text-stone-600">
        <p>
          <strong className="text-stone-800">RM:</strong> {rm}
        </p>
        <p>
          <strong className="text-stone-800">Turma:</strong> {turma}
        </p>
      </div>

        {/* Botãoj */}
      <div className="grid grid-cols-2 gap-3 w-full mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={barrarPropagacao}
          aria-label={`GitHub de ${nome}`}
          title="GitHub"
          className="py-2.5 bg-stone-900 hover:bg-black rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center border border-stone-800"
        >
          <img
            src={iconeGithub}
            alt="GitHub"
            className="w-5 h-5 brightness-0 invert"
          />
        </a>

       
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={barrarPropagacao}
          aria-label={`LinkedIn de ${nome}`}
          title="LinkedIn"
          className="py-2.5 bg-[#0A66C2] hover:bg-[#084e96] rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center border border-[#0A66C2]"
        >
          <img
            src={iconeLinkedin}
            alt="LinkedIn"
            className="w-5 h-5 brightness-0 invert"
          />
        </a>
      </div>
    </article>
  );
}