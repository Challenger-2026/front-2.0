import CardIntegrante from '../components/CardIntegrante';
import type { IntegranteProps } from '../types/types';


import foto1 from '../assets/Pic4.png';
import foto2 from '../assets/Pic2.png';
import foto3 from '../assets/Pic1.png';
import foto4 from '../assets/Pic3.png';




export default function Integrantes() {
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
      nome: 'Integrante 2',
      rm: '550001',
      turma: '1TDSP',
      foto: foto2,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
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
    
  ];

  return (
    <section className="secao-integrantes">
      <h2 className="titulo-secao">Nossa Equipe</h2>
      <p className="subtitulo-secao">A Lobo-guará Tech nasceu com o propósito de unir a inovação tecnológica da Sociedade 5.0 à urgência da preservação ambiental. Nosso objetivo é transformar hábitos ecológicos do dia a dia em uma experiência engajadora e recompensadora através da gamificação. Acreditamos que o desenvolvimento de sistemas deve servir ao bem-estar planetário, provando que linhas de código podem ser ferramentas ativas para proteger nossa biodiversidade e construir um futuro sustentável.</p>

      <div className="grid-integrantes">
        {listaIntegrantes.map((integrante) => (
          <CardIntegrante
            key={integrante.rm}
            nome={integrante.nome}
            rm={integrante.rm}
            turma={integrante.turma}
            foto={integrante.foto}
            github={integrante.github}
            linkedin={integrante.linkedin}
          />
        ))}
      </div>
    </section>
  );
}