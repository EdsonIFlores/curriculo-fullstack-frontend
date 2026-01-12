import React from 'react';
import FormacaoCard from '../../components/FormacaoCard'; 
import { ResumoFormacaoData } from '../../data/ResumoFormacaoData'; 

const ResumoPage: React.FC = () => {
    // Filtros: Separando o que é acadêmico/técnico do que é curso livre/certificação
    const formacaoAcademica = ResumoFormacaoData.filter(item => item.tipo === 'ACADEMICO');
    const certificacoes = ResumoFormacaoData.filter(item => item.tipo === 'CERTIFICACAO');
    
    return (
        <div className="container-page" style={{ textAlign: 'left', padding: '20px' }}>
            {/* 1. TÍTULO PRINCIPAL */}
            <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
                Resumo Profissional & Formação
            </h1>
            
            {/* 2. PERFIL PROFISSIONAL */}
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <p style={{ 
                    lineHeight: '1.8', 
                    color: 'var(--text-secondary)', 
                    textAlign: 'center',
                    fontSize: '1.1rem' 
                }}>
                    Desenvolvedor <strong>Full-Stack (MERN)</strong> em transição de carreira, com uma base estratégica consolidada em <strong>Infraestrutura de TI e Sistemas Corporativos</strong>. 
                    Essa experiência me fornece uma visão completa sobre escalabilidade, segurança e arquitetura, essencial para construir aplicações robustas. 
                    Sou proativo, focado em resolução de problemas complexos e dedicado ao aprendizado contínuo do ecossistema moderno (MongoDB, Express, React, Node.js).
                </p>
            </div>

            {/* Linha Divisória */}
            <hr style={{ 
                margin: '40px 0', 
                border: '0', 
                borderTop: '1px solid var(--border-color)', 
                width: '100%',
                opacity: 0.3
            }} />

            {/* 3. SEÇÃO DE FORMAÇÃO (ACADÊMICA + TÉCNICA) */}
            <section style={{ marginBottom: '50px' }}>
                <h2 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span role="img" aria-label="livros">📚</span> Formação Acadêmica e Técnica
                </h2>
                <div className="formacao-grid">
                    {formacaoAcademica.map(item => (
                        <FormacaoCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
            
            {/* 4. SEÇÃO DE CERTIFICAÇÕES */}
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span role="img" aria-label="troféu">🏆</span> Certificações e Cursos
                </h2>
                <div className="formacao-grid">
                    {certificacoes.map(item => (
                        <FormacaoCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ResumoPage;