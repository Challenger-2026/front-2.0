import { useState, type FormEvent, type ChangeEvent } from 'react';
import type { FormContatoInputs } from '../types/types';

export default function Contato() {
  const [formData, setFormData] = useState<FormContatoInputs>({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [erro, setErro] = useState<string>('');
  const [enviado, setEnviado] = useState<boolean>(false);


  //! Manipulação formulario
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErro('');
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

   
    const partesNome = formData.nome.trim().split(/\s+/);
    if (partesNome.length < 2 || partesNome.some((p) => p.length < 2)) {
      setErro('Por favor, informe seu nome completo (nome e sobrenome).');
      return;
    }

   
    const regexEmail = /^[^\s@]+@[^\s@]+\.com(\.[a-z]{2})?$/i;
    if (!regexEmail.test(formData.email.trim())) {
      setErro('O e-mail deve conter "@" e terminar com o domínio ".com".');
      return;
    }


    setEnviado(true);
    setErro('');
    setFormData({ nome: '', email: '', mensagem: '' });
  }

  return (
    <section className="contato-container">
      
        <div className="contato-info">
            <h2>Fale Conosco</h2>
            
            <p>
            Conecte-se com a Lobo-guará Tech! Tem dúvidas sobre como funcionam os rankings e medalhas?
            Ou quer saber como sua empresa pode se tornar parceira do nosso ecossistema sustentável?
            Use o canal ao lado para falar diretamente conosco. Estamos prontos para responder suas
            perguntas ou co-criar soluções inovadoras para o planeta.
            </p>

            <div className="contato-dados">
            <p><strong>E-mail:</strong> contato@loboguaratech.com.br</p>
            <p><strong>Telefone:</strong> (11) 4002-8922</p>
            <p><strong>Localização:</strong> São Paulo, SP - FIAP</p>
            </div>
        </div>

        
        <div className="contato-box">
            {erro && <p className="msg-erro">{erro}</p>}
            {enviado && <p className="msg-sucesso">Mensagem enviada com sucesso! Obrigado pelo contato.</p>}

            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome Completo:</label>
                <input
                id="nome"
                name="nome"
                type="text"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome aqui"
                required
                />
            </div>

            <div>
                <label htmlFor="email">E-mail </label>
                <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@exemplo.com"
                required
                />
            </div>

            <div>
                <label htmlFor="mensagem"> Mensagem: </label>
                <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Como podemos ajudar?"
                required
                />
            </div>

            <button type="submit">Enviar Mensagem</button>
            </form>
        </div>
    </section>
  );
}