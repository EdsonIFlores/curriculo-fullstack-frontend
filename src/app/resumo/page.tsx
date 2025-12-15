import React from 'react';
import FormacaoCard from '../../components/FormacaoCard'; // Importa o novo componente
import { ResumoFormacaoData } from '../../data/ResumoFormacaoData'; // Importa os dados

const ResumoPage: React.FC = () => {
    
    const formacaoAcademica = ResumoFormacaoData.filter(item => item.tipo === 'ACADEMICO');
    const certificacoes = ResumoFormacaoData.filter(item => item.tipo === 'CERTIFICACAO');
    
    return (
        <div className="container-page" style={{ textAlign: 'left' }}>
            <h1 className="section-title" style={{ textAlign: 'center' }}>
                Resumo Profissional & Formação
            </h1>
            
            {/* ... Sua seção de Perfil Profissional (Resumo) aqui ... */}

            <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)' }} />
            
            {/* --------------------------- EDUCAÇÃO (Com Cards Clicáveis) --------------------------- */}
            <section style={{ marginBottom: '40px' }}>
                <h2>📚 Formação Acadêmica</h2>
                <div className="formacao-grid">
                    {formacaoAcademica.map(item => (
                        <FormacaoCard key={item.id} item={item} />
                    ))}
                </div>
            </section>
            
            <section>
                <h2>🏆 Certificações e Cursos</h2>
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