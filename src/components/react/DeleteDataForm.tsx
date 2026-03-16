import React, { useState } from 'react';

interface FormState {
  cpf: string;
  telefone: string;
}

export const DeleteDataForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ cpf: '', telefone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 10) {
      return numbers
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2');
    }
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'cpf') {
      setFormData(prev => ({ ...prev, cpf: formatCPF(value) }));
    } else if (name === 'telefone') {
      setFormData(prev => ({ ...prev, telefone: formatPhone(value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const cpfNumbers = formData.cpf.replace(/\D/g, '');
    const phoneNumbers = formData.telefone.replace(/\D/g, '');

    if (cpfNumbers.length !== 11) {
      setErrorMessage('CPF deve ter 11 dígitos.');
      setIsSubmitting(false);
      return;
    }

    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      setErrorMessage('Telefone deve ter 10 ou 11 dígitos.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://slimaback.onrender.com/api/delete-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf: cpfNumbers,
          telefone: phoneNumbers,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ cpf: '', telefone: '' });
      } else {
        throw new Error('Erro ao enviar solicitação');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar sua solicitação. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Dados Excluídos</h3>
        <p className="text-green-700">
          Seus dados foram excluídos de nossos sistemas com sucesso.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">
          CPF
        </label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="000.000.000-00"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefone
        </label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          required
        />
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium py-3 px-6 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar Exclusão dos Meus Dados'}
      </button>

      <p className="text-xs text-gray-500 mt-4">
        Ao solicitar a exclusão, seus dados pessoais serão removidos imediatamente de nossos sistemas.
      </p>
    </form>
  );
};

export default DeleteDataForm;
