import { useState } from 'react';
import type { FaqItemType } from '../types/types';





// ! REVISAR CÓDIGOOOOO !!!!!!!!!!!!!








const listaFaq: FaqItemType[] = [
  {
    pergunta: 'O que é a Lobo-guará Tech?',
    resposta:
      'A Lobo-guará Tech é uma startup de tecnologia que desenvolveu uma plataforma de Gamificação Sustentável para transformar a conscientização ecológica em ações práticas do dia a dia. Através de um aplicativo dinâmico, nós conectamos cidadãos, comunidades locais e empresas parceiras (ESG), transformando desafios ambientais — como a reciclagem e a economia de recursos — em uma experiência social, divertida e recompensadora, utilizando um sistema de conquistas inspirado na rica biodiversidade da fauna brasileira.',
  },
  {
    pergunta: 'Quais são os pilares do projeto?',
    resposta:
      'Nossos pilares são os desafios e gamificação, valorização da Fauna Brasileira, comunidades e parcerias. Transformamos atitudes sustentáveis diárias (descarte correto de resíduos, redução de consumo de água, etc.) em missões que geram pontos e evolução no app. O progresso do usuário é recompensado com medalhas colecionáveis baseadas em animais do nosso bioma, indo desde o nível Tamanduá-Bandeira até o nível Lobo-guará. Incentivamos o comportamento social positivo através de rankings competitivos saudáveis entre comunidades, usuários e amigos. E conectamos empresas que apoiam a sustentabilidade ao nosso ecossistema. Os pontos acumulados pelos usuários podem ser trocados por benefícios e recompensas reais oferecidas por essas marcas parceiras.',
  },
  {
    pergunta: 'Como posso ser um Moderador?',
    resposta:
      'Para garantir que a distribuição de pontos seja justa e livre de fraudes, o Lobo-guará Tech conta com os Moderadores — membros da própria comunidade que auditam as evidências enviadas. Para se candidatar, você precisa cumprir três pré-requisitos. Ter um tempo mínimo de 3 meses e com acúmulos de pontos para mostrar que é ativo na plataforma, assim, estaremos colocando uma barreira para contas falsas e ociosas. Ter uma reputação positiva, mantendo um bom histórico de comportamento e interações nas comunidades locais. Ser ativo na plataforma em relação ao reporte de conteúdos, então o reconhecimento e o reporte de conteúdos que não seguem as regras da comunidade, realizados por meio de denúncias. E por último, um teste dentro da plataforma sobre o entendimento de como a comunidade da SoulUp funciona e sustentabilidade.',
  },
  {
    pergunta: 'Como as pontuações funcionam?',
    resposta:
      'Nosso sistema terá um algoritmo inteligente de pontuação que vai além de simplesmente atribuir pontos fixos por cada ação. O sistema considera múltiplos fatores antes de calcular a pontuação final do usuário. Sendo eles o tipo da ação sustentável realizada, a frequência com que o usuário realiza a ação, a consistência ao longo do tempo e o impacto sustentável gerado pela ação que o usuário realizou. Podendo ter métricas de 7, 15 e 30 dias, conforme é a atividade do usuário dentro da plataforma, pensando em seus objetivos e motivações para continuar com a atividade proposta. O usuário irá informar quantos dias de atividade quer fazer dentro de uma das métricas, assim, mesmo atingindo a meta, terá oportunidade de ultrapassar e ganhar mais pontos, por isso separamos as pontuações em 7, 15 e 30 dias. Se um usuário escolher o período de 7 dias, e acabar realizando mais atividades, passando a meta por mais 2 dias, totalizando 9 dias de atividade, o usuário irá ganhar 7 pontos pelos 7 dias mais 4 pontos pelos 2 dias que foram ultrapassado, totalizando 11 pontos. Com isso, trás a importância do sistema bonificar por atividades em vez de travar apenas na meta escolhida, trazendo efeito em sua motivação dentro da plataforma.',
  },
];

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-600 mb-2">Perguntas Frequentes</h2>
        <p className="text-stone-600 text-sm">
          Tire suas dúvidas sobre nossa plataforma e impacto sustentável.
        </p>
      </div>

      <div className="space-y-4">
        {listaFaq.map((item, index) => (
          <article
            key={index}
            className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              type="button"
              onClick={() => setAberto(aberto === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-stone-800 hover:text-orange-600 transition-colors"
            >
              <span className="text-base pr-4">{item.pergunta}</span>
              <span className="text-xl font-bold text-orange-600">
                {aberto === index ? '−' : '+'}
              </span>
            </button>

            {aberto === index && (
              <div className="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-3">
                <p>{item.resposta}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}