'use client'; // Necessário para usar hooks como useState e o evento onSubmit

import React, { useState } from 'react';

const ContatoPage: React.FC = () => {
    
    // 1. Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });
    
    // 2. Estado para feedback ao usuário ('idle', 'submitting', 'success', 'error')
    const [status, setStatus] = useState('idle'); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Verifica se já está enviando
        if (status === 'submitting') return;
        
        setStatus('submitting');

        try {
            // 🔴 AJUSTE A URL AQUI: Deve ser o endereço completo do seu servidor Express/Node.js
            const response = await fetch('http://localhost:3001/api/contato', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ nome: '', email: '', mensagem: '' }); // Limpa o formulário
            } else {
                setStatus('error');
                console.error("Erro da API:", result.message);
                alert(`Erro ao enviar: ${result.message || 'Erro desconhecido.'}`);
            }
        } catch (error) {
            setStatus('error');
            console.error("Erro de rede:", error);
            alert("Erro de conexão. Verifique se o backend está rodando.");
        }
    };

    return (
        <div className="container-page">
            <h2 className="section-title">
                ✉️ Entre em Contato
            </h2>
            
            <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>
                Estou sempre aberto a novas oportunidades e desafios. Use o formulário abaixo para enviar uma mensagem diretamente.
            </p>

            <div style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '30px', 
                borderRadius: '8px', 
                border: '1px dashed var(--border-color)' 
            }}>
                <h3 style={{color: 'var(--accent-color)'}}>Formulário de Contato</h3>
                
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
                    {/* Campo Nome */}
                    <input 
                        type="text" 
                        name="nome"
                        placeholder="Seu Nome" 
                        required 
                        value={formData.nome}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        style={{ padding: '10px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '4px' }}
                    />
                    
                    {/* Campo Email */}
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Seu Email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        style={{ padding: '10px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '4px' }}
                    />
                    
                    {/* Campo Mensagem */}
                    <textarea 
                        name="mensagem"
                        placeholder="Sua Mensagem" 
                        rows={5} 
                        required 
                        value={formData.mensagem}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        style={{ padding: '10px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '4px' }}
                    ></textarea>
                    
                    {/* Botão de Envio */}
                    <button 
                        type="submit" 
                        className="main-button" 
                        disabled={status === 'submitting'}
                        style={{ width: '100%', marginTop: '10px', cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
                    >
                        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>

                {/* Mensagens de Status */}
                {status === 'success' && (
                    <p style={{ color: 'var(--primary-color)', marginTop: '15px', fontWeight: 'bold' }}>
                        ✅ Mensagem enviada com sucesso! Logo retornarei o contato.
                    </p>
                )}
                {status === 'error' && (
                    <p style={{ color: '#ff4d4d', marginTop: '15px', fontWeight: 'bold' }}>
                        ❌ Ocorreu um erro ao enviar. Verifique o console.
                    </p>
                )}
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <p>
                    <strong style={{color: 'var(--accent-color)'}}>Email:</strong> SEU_EMAIL_AQUI
                </p>
                <p>
                    <strong style={{color: 'var(--accent-color)'}}>LinkedIn:</strong> URL_LINKEDIN
                </p>
            </div>
            
        </div>
    );
};

export default ContatoPage;