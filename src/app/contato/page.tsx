'use client';

import React, { useState } from 'react';

const ContatoPage: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });
    
    const [status, setStatus] = useState('idle'); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === 'submitting') return;
        setStatus('submitting');

        try {
            // URL da sua API local. Lembre-se de alterar para a URL real no deploy.
            const response = await fetch('http://localhost:3001/api/contato', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ nome: '', email: '', mensagem: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error("Erro de conexão:", error);
        }
    };

    return (
        <div className="container-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '10px' }}>
                ✉️ Entre em Contato
            </h2>
            
            <p style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-secondary)' }}>
                Estou sempre aberto a novas oportunidades e desafios. Use o formulário ou os botões abaixo.
            </p>

            {/* FORMULÁRIO */}
            <div style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '30px', 
                borderRadius: '12px', 
                border: '1px solid var(--border-color)',
                marginBottom: '40px'
            }}>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>Envie uma mensagem</h3>
                
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
                    <input 
                        type="text" 
                        name="nome"
                        placeholder="Seu Nome" 
                        required 
                        value={formData.nome}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '6px' }}
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Seu Email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '6px' }}
                    />
                    <textarea 
                        name="mensagem"
                        placeholder="Sua Mensagem" 
                        rows={5} 
                        required 
                        value={formData.mensagem}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        style={{ padding: '12px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '6px' }}
                    ></textarea>
                    
                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="main-button"
                        style={{ 
                            padding: '12px', 
                            backgroundColor: 'var(--accent-color)', 
                            color: '#000', 
                            fontWeight: 'bold', 
                            border: 'none', 
                            borderRadius: '6px', 
                            cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>

                {status === 'success' && <p style={{ color: '#4caf50', marginTop: '15px', textAlign: 'center' }}>✅ Enviada com sucesso!</p>}
                {status === 'error' && <p style={{ color: '#ff4d4d', marginTop: '15px', textAlign: 'center' }}>❌ Erro ao enviar. Tente os botões abaixo.</p>}
            </div>

            {/* SEÇÃO DE BOTÕES (REDES SOCIAIS) */}
            <div style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '20px', color: 'var(--text-light)', fontSize: '1.2rem' }}>
                    Ou conecte-se diretamente:
                </h3>
                
                <div className="button-group">
                    <a href="mailto:tec.edsonsilva.es@gmail.com" className="contact-button email">
                        <span>📧</span> Enviar E-mail
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/edson-iago-flores-7767a5a6/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-button linkedin"
                    >
                        <span>🔗</span> LinkedIn
                    </a>
                </div>
            </div>

            <style jsx>{`
                .button-group {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .contact-button {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 25px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: bold;
                    color: white;
                    transition: all 0.3s ease;
                    font-size: 0.95rem;
                    min-width: 200px;
                    justify-content: center;
                }
                .email { background-color: #ea4335; }
                .linkedin { background-color: #0077b5; }
                .contact-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                }
                @media (max-width: 600px) {
                    .button-group { flex-direction: column; align-items: center; }
                    .contact-button { width: 100%; }
                }
            `}</style>
        </div>
    );
};

export default ContatoPage;