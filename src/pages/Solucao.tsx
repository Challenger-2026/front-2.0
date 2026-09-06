interface CardSolucao {
  id: string;
  icone: string;
  titulo: string;
  descricao: string;
}

interface EtapaRanking {
  numero: number;
  titulo: string;
  descricao: string;
}

const listaCards: CardSolucao[] = [
  {
    id: 'comunidades',
    icone: '👥',
    titulo: 'Comunidades Ativas',
    descricao:
      'Os usuários podem se unir em comunidades parceiras com ONGs e unem forças para cumprir macro-desafios, como a revitalização de uma praça ou mutirões de reciclagem, fortalecendo o comportamento social positivo.',
  },
  {
    id: 'moderadores',
    icone: '🛡️',
    titulo: 'Moderadores Guardiões',
    descricao:
      'Para garantir a integridade do sistema, membros veteranos e engajados atuam como moderadores. Eles são responsáveis por auditar as evidências (fotos e vídeos) enviadas pelos usuários para comprovar as ações sustentáveis, garantindo que os pontos distribuídos sejam justos.',
  },
  {
    id: 'pontuacao',
    icone: '🎲',
    titulo: 'Pontuação Inteligente',
    descricao:
      'O sistema considera múltiplos fatores antes de calcular a pontuação final do usuário. Sendo eles o tipo da ação sustentável realizada, a frequência com que o usuário realiza a ação, a consistência ao longo do tempo e o impacto sustentável gerado pela ação que o usuário realizou.',
  },
  {
    id: 'ranking',
    icone: '🏆',
    titulo: 'Ranking e Ligas',
    descricao:
      'O motor de engajamento do nosso sistema. Dividido em ligas mensais baseadas na fauna brasileira, o ranking estimula a competição saudável. Subir de nível significa ganhar maior reconhecimento social na plataforma.',
  },
  {
    id: 'criadores',
    icone: '🎯',
    titulo: 'Criadores de Comunidade',
    descricao:
      'Inicialmente, pensamos nas Comunidades estarem atreladas as ONGs parceiras para ter visibilidade dentro de suas causas. E futuramente, ser uma possibilidades para outros tipos de visibilidade como hábitos saudáveis por exemplo.',
  },
  {
    id: 'regras',
    icone: '📖',
    titulo: 'Regras',
    descricao:
      'Para ser moderador e criador dentro da plataforma, existem regras que o usuário deve seguir inicialmente. Elas são baseadas no tempo de uso, engajamento e entendimento sobre a plataforma.',
  },
];

const listaEtapas: EtapaRanking[] = [
  {
    numero: 1,
    titulo: 'Ação e Foto',
    descricao: 'Você realiza uma ação e envia a comprovação.',
  },
  {
    numero: 2,
    titulo: 'Validação',
    descricao: 'Moderadores aprovam a veracidade da sua atividade.',
  },
  {
    numero: 3,
    titulo: 'Pontuação',
    descricao: 'Seus pontos sobem no ranking geral da sua comunidade.',
  },
];

export default function Solucao() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
    
      <section className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">
          O Ecossistema Lobo-guará Tech
        </h1>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          Nossa plataforma vai além de um aplicativo de tarefas: criamos uma{' '}
          <strong className="text-stone-900 font-semibold">rede de impacto socioambiental</strong>. Através da união entre tecnologia, validação comunitária e incentivos reais, transformamos a conscientização ecológica em hábitos diários e mensuráveis.
        </p>
      </section>


      <section aria-labelledby="pilares-title" className="w-full mb-16">
        <h2 id="pilares-title" className="sr-only">
          Pilares da Solução
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {listaCards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl shadow-md border-t-4 border-[#D35400] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 justify-between"
            >
              <div>
                <span aria-hidden="true" className="text-4xl mb-5 select-none block">
                  {card.icone}
                </span>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{card.titulo}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">{card.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </section>


      <section aria-labelledby="ranking-title" className="w-full bg-[#1C1C1C] rounded-2xl p-8 sm:p-12 text-center text-amber-50 shadow-lg">
        <h2 id="ranking-title" className="text-2xl sm:text-3xl font-extrabold text-[#D35400] mb-3">
          Como funciona a dinâmica de Ranking?
        </h2>
        <p className="text-stone-300 text-sm sm:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
          Todo mês, o ciclo se reinicia e os usuários são distribuídos em Ligas Competitivas. Suas ações diárias ditam sua posição no ecossistema:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listaEtapas.map((etapa) => (
            <div
              key={etapa.numero}
              className="bg-[#242424] border border-stone-800 rounded-xl p-6 flex flex-col items-center text-center relative"
            >
              <span className="w-9 h-9 rounded-full bg-[#D35400] text-white font-bold flex items-center justify-center text-sm mb-4 shadow">
                {etapa.numero}
              </span>
              <h3 className="font-bold text-base text-white mb-2">{etapa.titulo}</h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}