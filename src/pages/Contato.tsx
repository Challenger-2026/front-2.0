import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { FormContatoInputs } from '../types/types';
import Botao from '../components/Botao';

export default function Contato() {
  const [mensagemValidada, setMensagemValidada] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormContatoInputs>();

  function validarMensagem() {
    setMensagemValidada(true);
  }

  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Informações de Contato */}
      <div className="space-y-6">
        <div className="relative z-10 bg-[#fffbed]/90 rounded-2xl px-6 py-5">
          <h1 className="text-3xl font-extrabold text-orange-600 mb-2">Fale Conosco</h1>
          <p className="text-stone-700 text-sm leading-relaxed">
            Conecte-se com a Lobo-guará Tech! Tem dúvidas sobre como funcionam os rankings e
            medalhas? Ou quer saber como sua empresa pode se tornar parceira do nosso ecossistema
            sustentável? Confira nossos canais de contato ou experimente o formulário de
            demonstração.
          </p>
        </div>

        <address className="not-italic bg-stone-900 text-amber-50 p-6 rounded-xl space-y-2 text-sm shadow-sm">
          <p className="break-words">
            <strong className="text-white">E-mail:</strong> contato@loboguaratech.com.br
          </p>
          <p>
            <strong className="text-white">Telefone:</strong> (11) 4002-8922
          </p>
          <p>
            <strong className="text-white">Localização:</strong> São Paulo, SP - FIAP
          </p>
        </address>
      </div>

      {/* Formulário com React Hook Form */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
        <p id="aviso-formulario" className="mb-5 text-sm text-stone-600 text-center">
          Formulário de demonstração
        </p>

        {mensagemValidada && (
          <p
            role="status"
            className="mb-5 p-3.5 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm font-semibold"
          >
            Dados válidos! Esta demonstração não envia mensagens.
          </p>
        )}

        <form
          onSubmit={handleSubmit(validarMensagem)}
          onChange={() => setMensagemValidada(false)}
          aria-describedby="aviso-formulario"
          className="space-y-4"
          noValidate
        >
          {/* Campo Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-bold text-stone-900 mb-1">
              Nome Completo:
            </label>
            <input
              id="nome"
              type="text"
              autoComplete="name"
              required
              placeholder="Seu nome aqui"
              aria-invalid={errors.nome ? 'true' : 'false'}
              aria-describedby={errors.nome ? 'erro-nome' : undefined}
              {...register('nome', {
                setValueAs: (valor: string) => valor.trim(),
                required: 'Por favor, informe seu nome completo.',
                minLength: {
                  value: 3,
                  message: 'O nome deve conter pelo menos 3 caracteres.',
                },
              })}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-stone-900 text-sm focus:outline-none focus:border-orange-600 ${
                errors.nome ? 'border-red-500' : 'border-stone-300'
              }`}
            />
            {errors.nome && (
              <span id="erro-nome" className="text-xs text-red-600 mt-1 block font-medium">
                {errors.nome.message}
              </span>
            )}
          </div>

          {/* Campo E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-stone-900 mb-1">
              E-mail:
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="email@exemplo.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'erro-email' : undefined}
              {...register('email', {
                setValueAs: (valor: string) => valor.trim(),
                required: 'O e-mail é obrigatório.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  message: 'Por favor, insira um endereço de e-mail válido.',
                },
              })}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-stone-900 text-sm focus:outline-none transition-colors ${
                errors.email
                  ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                  : 'border-stone-300 focus:border-orange-600'
              }`}
            />
            {errors.email && (
              <span id="erro-email" className="text-xs text-red-600 mt-1 block font-medium">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Campo Mensagem */}
          <div>
            <label htmlFor="mensagem" className="block text-sm font-bold text-stone-900 mb-1">
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              rows={4}
              required
              placeholder="Como podemos ajudar?"
              aria-invalid={errors.mensagem ? 'true' : 'false'}
              aria-describedby={errors.mensagem ? 'erro-mensagem' : undefined}
              {...register('mensagem', {
                setValueAs: (valor: string) => valor.trim(),
                required: 'A mensagem é obrigatória.',
                minLength: {
                  value: 10,
                  message: 'A mensagem deve conter no mínimo 10 caracteres.',
                },
              })}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-stone-900 text-sm focus:outline-none resize-none transition-colors ${
                errors.mensagem
                  ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                  : 'border-stone-300 focus:border-orange-600'
              }`}
            />
            {errors.mensagem && (
              <span id="erro-mensagem" className="text-xs text-red-600 mt-1 block font-medium">
                {errors.mensagem.message}
              </span>
            )}
          </div>

          <Botao tipo="submit" className="w-full sm:w-auto">
            Enviar mensagem
          </Botao>
        </form>
      </div>
    </main>
  );
}
