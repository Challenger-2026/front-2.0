import { useForm } from 'react-hook-form';
import type { FormContatoInputs } from '../types/types';

export default function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormContatoInputs>();

  function onSubmit() {
    reset();
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-extrabold text-orange-600 mb-2">Fale Conosco</h2>
          <p className="text-stone-700 text-sm leading-relaxed">
            Conecte-se com a Lobo-guará Tech! Tem dúvidas sobre como funcionam os rankings e medalhas?
            Ou quer saber como sua empresa pode se tornar parceira do nosso ecossistema sustentável?
            Use o canal ao lado para falar diretamente conosco. Estamos prontos para responder suas
            perguntas ou co-criar soluções inovadoras para o planeta.
          </p>
        </div>

        
        <div className="bg-stone-900 text-amber-50 p-6 rounded-xl space-y-2 text-sm shadow-sm">
          <p><strong className="text-white">E-mail:</strong> contato@loboguaratech.com.br</p>
          <p><strong className="text-white">Telefone:</strong> (11) 4002-8922</p>
          <p><strong className="text-white">Localização:</strong> São Paulo, SP - FIAP</p>
        </div>
      </div>

    
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
        {isSubmitSuccessful && (
          <p className="mb-5 p-3.5 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm font-semibold">
            Mensagem enviada com sucesso! Obrigado pelo contato.
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-bold text-stone-900 mb-1">
              Nome Completo:
            </label>
            <input
              type="text"
              placeholder="Seu nome aqui"
              {...register('nome', { required: 'Por favor, informe seu nome completo.' })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-orange-600"
            />
            {errors.nome && (
              <span className="text-xs text-red-600 mt-1 block font-medium">
                {errors.nome.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-900 mb-1">
              E-mail:
            </label>
            <input
              type="email"
              placeholder="email@exemplo.com"
              {...register('email', {
                required: 'O e-mail é obrigatório.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.com(\.[a-z]{2})?$/i,
                  message: 'O e-mail deve conter "@" e terminar com o domínio ".com".',
                },
              })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-orange-600"
            />
            {errors.email && (
              <span className="text-xs text-red-600 mt-1 block font-medium">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-900 mb-1">
              Mensagem:
            </label>
            <textarea
              rows={4}
              placeholder="Como podemos ajudar?"
              {...register('mensagem', { required: 'A mensagem é obrigatória.' })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:border-orange-600 resize-y"
            />
            {errors.mensagem && (
              <span className="text-xs text-red-600 mt-1 block font-medium">
                {errors.mensagem.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-lg transition-colors cursor-pointer"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}