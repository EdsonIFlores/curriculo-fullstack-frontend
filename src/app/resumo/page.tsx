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
          {/* Seção de Perfil Profissional */}
<p style={{ marginTop: '20px', lineHeight: '1.6', color: 'var(--text-secondary)', textAlign: 'center' }}>
  Desenvolvedor <strong>Full-Stack (MERN)</strong> em transição de carreira, com uma base estratégica consolidada em <strong>Infraestrutura de TI e Sistemas Corporativos</strong>. 
  Essa experiência me fornece uma visão completa sobre escalabilidade, segurança e arquitetura, essencial para construir aplicações robustas. 
  Sou proativo, focado em resolução de problemas complexos e dedicado ao aprendizado contínuo do ecossistema moderno (MongoDB, Express, React, Node.js).
</p>

<hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid var(--border-color)', width: '100%' }} />
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