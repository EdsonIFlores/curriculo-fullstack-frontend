'use client'; // Necessário para usar eventos de clique (onClick)

import React, { useState } from 'react';

export default function SkillsPage() {
  // 1. Lógica para controlar qual card está aberto
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const toggleSkill = (id: string) => {
    setActiveSkill(activeSkill === id ? null : id);
  };

  return (
    <section className="skills-section">
      <h2 className="title">Minhas Habilidades</h2>
      <p className="subtitle">Clique nos cards para ver as tecnologias específicas</p>

      <div className="skills-grid">
        {/* CARD 1: DESENVOLVIMENTO FULL-STACK */}
        <div className={`skill-card ${activeSkill === 'dev' ? 'active' : ''}`} onClick={() => toggleSkill('dev')}>
          <span className="skill-icon">⚛️</span>
          <h3>Full-Stack Dev</h3>
          <p>Criação de aplicações modernas e escaláveis utilizando a stack MERN.</p>
          
          {activeSkill === 'dev' && (
            <div className="skill-details">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">APIs REST</span>
            </div>
          )}
        </div>

        {/* CARD 2: INFRAESTRUTURA & REDES */}
        <div className={`skill-card ${activeSkill === 'infra' ? 'active' : ''}`} onClick={() => toggleSkill('infra')}>
          <span className="skill-icon">🖥️</span>
          <h3>Infraestrutura & Redes</h3>
          <p>Gestão de servidores e ativos de rede com foco em alta disponibilidade.</p>
          
          {activeSkill === 'infra' && (
            <div className="skill-details">
              <span className="tech-tag">Administração de Redes</span>
              <span className="tech-tag">Servidores Windows/Linux</span>
              <span className="tech-tag">VPN</span>
              <span className="tech-tag">Cabeamento Estruturado</span>
              <span className="tech-tag">Virtualização</span>
              <span className="tech-tag">Hardware</span>
            </div>
          )}
        </div>

        {/* CARD 3: GESTÃO & SISTEMAS (ERP) */}
        <div className={`skill-card ${activeSkill === 'systems' ? 'active' : ''}`} onClick={() => toggleSkill('systems')}>
          <span className="skill-icon">📊</span>
          <h3>Sistemas & ERP</h3>
          <p>Experiência em suporte e análise de grandes sistemas corporativos.</p>
          
          {activeSkill === 'systems' && (
            <div className="skill-details">
              <span className="tech-tag">TOTVS Protheus</span>
              <span className="tech-tag">SAP (Produtos)</span>
              <span className="tech-tag">Análise de Dados</span>
              <span className="tech-tag">Gestão de TI</span>
              <span className="tech-tag">SLA / Processos</span>
            </div>
          )}
        </div>

        {/* CARD 4: SEGURANÇA & FERRAMENTAS */}
        <div className={`skill-card ${activeSkill === 'tools' ? 'active' : ''}`} onClick={() => toggleSkill('tools')}>
          <span className="skill-icon">🛡️</span>
          <h3>Segurança & Tools</h3>
          <p>Monitoramento e proteção de dados e ativos tecnológicos.</p>
          
          {activeSkill === 'tools' && (
            <div className="skill-details">
              <span className="tech-tag">Cybersecurity</span>
              <span className="tech-tag">Controle de Acesso</span>
              <span className="tech-tag">Office 365 Admin</span>
              <span className="tech-tag">Monitoramento</span>
              <span className="tech-tag">Soluções Técnicas</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .skills-section { padding: 60px 20px; text-align: center; color: white; }
        .title { color: #00d1ff; font-size: 2.5rem; margin-bottom: 10px; }
        .subtitle { color: #888; margin-bottom: 40px; }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid #333;
          border-radius: 20px;
          padding: 30px;
          cursor: pointer;
          transition: 0.3s;
          text-align: left;
        }

        .skill-card:hover { border-color: #00d1ff; background: rgba(0, 209, 255, 0.02); }
        .skill-card.active { border-color: #00d1ff; background: rgba(0, 209, 255, 0.05); }

        .skill-icon { font-size: 2.5rem; margin-bottom: 20px; display: block; }
        h3 { color: #fff; margin-bottom: 10px; font-size: 1.5rem; }
        p { color: #aaa; font-size: 0.9rem; line-height: 1.5; }

        .skill-details {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #333;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          animation: fadeIn 0.4s ease;
        }

        .tech-tag {
          background: #111;
          color: #00d1ff;
          border: 1px solid rgba(0, 209, 255, 0.3);
          padding: 5px 12px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
}