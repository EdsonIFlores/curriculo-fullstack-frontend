'use client'; 
// O 'use client' é essencial para usar useState e FormEvent

import React, { useState, FormEvent } from 'react';

// A URL da API é lida do .env.local (http://localhost:3001)
// Garantimos um fallback caso a variável não seja lida (embora não deva acontecer)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setResponseMessage('');

        // Monta o endpoint usando a variável de ambiente
        const endpoint = `${API_URL}/contact`; 

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                const data = await response.json();
                setStatus('success');
                setResponseMessage(data.message || 'Mensagem enviada com sucesso!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const errorData = await response.json();
                setStatus('error');
                setResponseMessage(errorData.error || 'Erro ao enviar. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro de rede/servidor:', error);
            setStatus('error');
            setResponseMessage('Não foi possível conectar ao servidor da API. Verifique se o Backend está ativo.');
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h1 style={{ color: '#0070f3', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                ✉️ Fale Comigo
            </h1>
            <p style={{ color: '#555', marginBottom: '25px' }}>
                Use o formulário abaixo para entrar em contato diretamente. Se preferir, me encontre no LinkedIn e GitHub (links no rodapé).
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                
                <input
                    type="text"
                    placeholder="Seu Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    style={inputStyle}
                />
                
                <input
                    type="email"
                    placeholder="Seu Melhor Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    style={inputStyle}
                />
                
                <textarea
                    placeholder="Sua Mensagem / Proposta de Projeto"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    disabled={status === 'loading'}
                    style={{ ...inputStyle, resize: 'vertical' }}
                />

                <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    style={buttonStyle(status)}
                >
                    {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
            </form>

            {/* Mensagens de Status */}
            {responseMessage && (
                <div style={statusMessageStyle(status)}>
                    {responseMessage}
                </div>
            )}
        </div>
    );
};

export default ContactPage;

// --- Estilos Inline ---
const inputStyle: React.CSSProperties = {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1em',
};

const buttonStyle = (status: string): React.CSSProperties => ({
    padding: '12px',
    backgroundColor: status === 'loading' ? '#999' : '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
});

const statusMessageStyle = (status: string): React.CSSProperties => ({
    marginTop: '20px',
    padding: '15px',
    borderRadius: '6px',
    backgroundColor: status === 'success' ? '#d4edda' : status === 'error' ? '#f8d7da' : 'transparent',
    color: status === 'success' ? '#155724' : status === 'error' ? '#721c24' : '#333',
    border: status === 'success' ? '1px solid #c3e6cb' : status === 'error' ? '1px solid #f5c6cb' : 'none',
    fontWeight: 'bold'
});