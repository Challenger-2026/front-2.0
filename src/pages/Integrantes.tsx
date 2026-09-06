import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardIntegrante from '../components/CardIntegrante';
import Botao from '../components/Botao';
import type { IntegranteProps } from '../types/types';

import foto1 from '../assets/Pic4.png';
import foto2 from '../assets/Pic2.png';
import foto3 from '../assets/Pic1.png';
import foto4 from '../assets/Pic3.png';
import foto5 from '../assets/Pic5.png';

const listaIntegrantes: IntegranteProps[] = [
  {
    nome: 'Integrante 1',
    rm: '550000',
    turma: '1TDSP',
    foto: foto1,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    nome: 'Eduardo Lima de Souza',
    rm: '570412',
    turma: '1TDSP',
    foto: foto2,
    github: 'https://github.com/duduutech',
    linkedin: 'https://www.linkedin.com/in/duduulimatech/',
  },
  {
    nome: 'Integrante 3',
    rm: '550002',
    turma: '1TDSP',
    foto: foto3,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    nome: 'Integrante 4',
    rm: '550003',
    turma: '1TDSP',
    foto: foto4,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    nome: 'Integrante 5',
    rm: '550004',
    turma: '1TDSP',
    foto: foto5,
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

export default function Integrantes() {
  const { rm } = useParams<{ rm?: string }>();
  const navigate = useNavigate();

  // Estado derivado diretamente do parâmetro de rota (elimina cascading render)
  const selecionado = listaIntegrantes.find((item) => item.rm === rm) ?? null;

  // Efeito colateral exclusivo para sincronizar o título da aba no navegador
  useEffect(() => {
    document.title = selecionado
      ? `${selecionado.nome} | Lobo-guará Tech`
      : 'Integrantes | Lobo-guará Tech';
  }, [selecionado]);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-6 text-center">
      <h1 className="text-3xl font-bold text-orange-600 mb-3">Nossa Equipe</h1>
      <p className="text-stone-700 text-sm max-w-3xl mx-auto leading-relaxed mb-8">
        A Lobo-guará Tech nasceu com o propósito de unir a inovação tecnológica da Sociedade 5.0 à urgência da preservação ambiental. Nosso objetivo é transformar hábitos ecológicos do dia a dia em uma experiência engajadora e recompensadora através da gamificação. Acreditamos que o desenvolvimento de sistemas deve servir ao bem-estar planetário, provando que linhas de código podem ser ferramentas ativas para proteger nossa biodiversidade e construir um futuro sustentável.
      </p>

      {selecionado && (
        <article className="max-w-xl mx-auto mb-12 p-6 bg-white border-2 border-orange-500 rounded-2xl shadow-md flex flex-col items-center transition-all duration-300 animate-fade-in">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
            Integrante em Destaque
          </span>
          <img
            src={selecionado.foto}
            alt={`Foto de ${selecionado.nome}`}
            className="w-24 h-24 rounded-full object-cover border-2 border-orange-500 mb-3 shadow"
          />
          <h2 className="text-xl font-bold text-stone-900">{selecionado.nome}</h2>
          <p className="text-stone-600 text-xs sm:text-sm mb-4">
            RM: {selecionado.rm} • Turma: {selecionado.turma}
          </p>

          <Botao acao={() => navigate('/integrantes')} variante="secundario">
            Limpar Destaque / Ver Todos
          </Botao>
        </article>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center items-stretch">
        {listaIntegrantes.map((integrante) => (
          <div
            key={integrante.rm}
            role="button"
            tabIndex={0}
            aria-label={`Ver detalhes de ${integrante.nome}`}
            onClick={() => navigate(`/integrantes/${integrante.rm}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate(`/integrantes/${integrante.rm}`);
              }
            }}
            className="w-full max-w-[220px] h-full flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-xl"
          >
            <CardIntegrante
              nome={integrante.nome}
              rm={integrante.rm}
              turma={integrante.turma}
              foto={integrante.foto}
              github={integrante.github}
              linkedin={integrante.linkedin}
            />
          </div>
        ))}
      </div>
    </main>
  );
}