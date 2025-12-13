'use client'; // ⚠️ ESSENCIAL: Indica que este é um Componente Cliente para interatividade

import React, { useState } from 'react';

// URL do seu backend Node.js, rodando em outro terminal
const API_URL = 'http://localhost:3001/contact'; 

const ContactPage: React.FC = () => {
  // 1. Estados para os campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // 2. Estados para o feedback ao usuário
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne o recarregamento padrão da página
    
    setStatus('Enviando...');
    setIsSuccess(false);

    const formData = { name, email, message };

    try {
      // 3. Chamada à API (fetch)
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Diz ao backend que os dados são JSON
        },
        body: JSON.stringify(formData), // Converte o objeto JavaScript em JSON
      });

      const result = await response.json();

      if (response.ok) {
        // Sucesso (Status 201)
        setStatus('✅ Mensagem enviada com sucesso! Em breve entrarei em contato.');
        setIsSuccess(true);
        
        // Limpar o formulário
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Erro do servidor (Status 4xx ou 5xx)
        setStatus(`❌ Erro ao enviar: ${result.message || 'Erro desconhecido. Verifique o console.'}`);
        setIsSuccess(false);
      }
    } catch (error) {
      // 4. Erro de Rede (Geralmente CORS ou o backend não está rodando)
      console.error('Erro de conexão:', error);
      setStatus('🚨 Erro de conexão. Seu servidor Node.js (Backend) está rodando na porta 3001?');
      setIsSuccess(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Formulário de Contato</h2>
      
      {/* Exibição da Mensagem de Status */}
      {status && (
        <p style={{ 
          color: isSuccess ? 'green' : 'red', 
          fontWeight: 'bold',
          border: `1px solid ${isSuccess ? 'green' : 'red'}`,
          padding: '10px',
          borderRadius: '5px'
        }}>
          {status}
        </p>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          id="name"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          style={{ padding: '8px', border: '1px solid #ccc' }}
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ padding: '8px', border: '1px solid #ccc' }}
        />

        <label htmlFor="message">Mensagem:</label>
        <textarea 
          rows={5}
          id="message"
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
          style={{ padding: '8px', border: '1px solid #ccc' }}
        />

        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            backgroundColor: 'darkblue', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer' 
          }}
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
