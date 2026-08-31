import type { IntegranteProps } from '../types/types';

export default function CardIntegrante({ nome, rm, turma, foto, github, linkedin }: IntegranteProps) {
  return (
    <div className="card-integrante">
      <img src={foto} alt={`Foto de ${nome}`} className="card-foto" />
      <h3 className="card-nome">{nome}</h3>
      <p className="card-info"><strong>RM:</strong> {rm}</p>
      <p className="card-info"><strong>Turma:</strong> {turma}</p>

      <div className="card-links">
        <a href={github} className="btn-link">GitHub</a>
        <a href={linkedin} className="btn-link">Linkedin</a>
      </div>
    </div>
  );
}