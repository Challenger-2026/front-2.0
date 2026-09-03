interface CardPilarProps {
  icone: string;
  titulo: string;
  descricao: string;
}

export default function CardPilar({ icone, titulo, descricao }: CardPilarProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md border-t-4 border-[#D35400] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
      <span className="text-4xl mb-5 select-none">{icone}</span>
      <h2 className="text-xl font-bold text-stone-900 mb-4">{titulo}</h2>
      <p className="text-stone-600 text-sm leading-relaxed">{descricao}</p>
    </article>
  );
}