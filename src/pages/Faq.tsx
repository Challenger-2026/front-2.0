import { useState } from 'react';
import type { FaqItemType } from '../types/types';

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
      'Para garantir que a distribuição de pontos seja justa e livre de fraudes, o Lobo-guará Tech conta com os Moderadores — membros da própria comunidade que auditam as evidências enviadas. Para se candidatar, você precisa cumprir três pré-requisitos: ter um tempo mínimo de 3 meses e acúmulo de pontos na plataforma, ter uma reputação positiva nas comunidades locais, ser ativo no reporte de irregularidades e realizar o teste de diretrizes e sustentabilidade.',
  },
  {
    pergunta: 'Como as pontuações funcionam?',
    resposta:
      'Nosso sistema terá um algoritmo inteligente de pontuação que vai além de simplesmente atribuir pontos fixos por cada ação. O sistema considera múltiplos fatores antes de calcular a pontuação final do usuário: tipo da ação sustentável realizada, frequência, consistência ao longo do tempo e o impacto gerado. O usuário pode cumprir métricas flexíveis de 7, 15 ou 30 dias com bonificações extras por metas superadas.',
  },
];

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-600 mb-2">Perguntas Frequentes</h2>
        <p className="text-stone-600 text-sm">
          Tire suas dúvidas sobre nossa plataforma e impacto sustentável.
        </p>
      </div>

      <div className="space-y-4">
        {listaFaq.map((item, index) => {
          const estaAberto = aberto === index;

          return (
            <article
              key={index}
              className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${
                estaAberto ? 'border-orange-400 ring-1 ring-orange-200' : 'border-stone-200 hover:border-orange-300'
              }`}
            >

              <button
                type="button"
                id={`faq-btn-${index}`}
                aria-expanded={estaAberto}
                aria-controls={`faq-resp-${index}`}
                onClick={() => setAberto(estaAberto ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-stone-800 hover:text-orange-600 transition-colors cursor-pointer select-none"
              >
                <span className="text-base pr-4">{item.pergunta}</span>


                <span
                  aria-hidden="true"
                  className={`text-2xl font-bold text-orange-600 transition-transform duration-300 inline-block leading-none ${
                    estaAberto ? 'rotate-45 text-orange-700' : 'rotate-0'
                  }`}
                >
                  +
                </span>
              </button>


              <div
                id={`faq-resp-${index}`}
                role="region"
                aria-labelledby={`faq-btn-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  estaAberto ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-3">
                    <p>{item.resposta}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}