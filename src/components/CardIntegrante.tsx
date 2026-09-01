import type { IntegranteProps } from '../types/types';

export default function CardIntegrante({
  nome,
  rm,
  turma,
  foto,
  github,
  linkedin,
}: IntegranteProps) {
  return (
    <article className="group bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-orange-600 transition-all duration-300 flex flex-col      items-center text-center">
      <div className="relative mb-4">
        <img src={foto} alt={`Foto de ${nome}`} className="w-28 h-28 rounded-full object-cover border-2 border-stone-100 group-hover:border-orange-600 transition-colors shadow-sm"/>
      </div>

      <h3 className="text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors mb-2">{nome}</h3>

      <div className="bg-stone-50 rounded-xl py-2 px-4 w-full mb-6 border border-stone-100 space-y-1 text-xs sm:text-sm text-stone-600">

        <p><strong className="text-stone-800">RM:</strong> {rm}</p>
        <p><strong className="text-stone-800">Turma:</strong> {turma}</p>

      </div>

      <div className="grid grid-cols-2 gap-3 w-full mt-auto">

        <a href={github}target="_blank" rel="noopener noreferrer"className="py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-95 text-center">GitHub </a>
        <a href={linkedin}target="_blank"rel="noopener noreferrer" className="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-95 text-center">LinkedIn </a>

      </div>

    </article>
  );
}