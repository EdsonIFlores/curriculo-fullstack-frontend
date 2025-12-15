import React from 'react';

const ExperienciaPage: React.FC = () => {
  const metaStyle: React.CSSProperties = { margin: '5px 0', color: 'var(--text-secondary)', fontSize: '0.9em' };
  
  return (
    <div className="container-page">
      <h2 className="section-title">
        💼 Experiências Profissionais
      </h2>

      {/* Cargo 1: Técnico de sistemas de informação - Dexian (Cargill) */}
      <div className="data-card">
        <h3>Técnico de Sistemas de Informação</h3>
        <p style={{ margin: '5px 0', fontSize: '1.1em', fontWeight: 'bold', color: 'var(--text-light)' }}>Dexian (Alocado na Cargill)</p>
        <p style={metaStyle}>dez de 2025 – o momento (Barreiras, BA)</p>
        <ul style={{ paddingLeft: '20px', margin: '10px 0 0', color: 'var(--text-secondary)' }}>
          <li>Suporte e manutenção de sistemas de TI para garantir a continuidade operacional das atividades, com foco em sistemas como TOTVS Protheus.</li>
          <li>Experiência em ambientes corporativos, garantindo alta disponibilidade de serviços críticos.</li>
        </ul>
      </div>

      {/* Cargo 2: Analista de suporte técnico - Quality Digital */}
      <div className="data-card">
        <h3>Analista de Suporte Técnico</h3>
        <p style={{ margin: '5px 0', fontSize: '1.1em', fontWeight: 'bold', color: 'var(--text-light)' }}>Quality Digital</p>
        <p style={metaStyle}>dez de 2024 – dez de 2025 (1 ano 1 mês) | Híbrida</p>
        <ul style={{ paddingLeft: '20px', margin: '10px 0 0', color: 'var(--text-secondary)' }}>
          <li>Responsável pela administração de redes, análise e resolução de problemas complexos em Servidores (Windows/Linux) e infraestrutura de TI.</li>
          <li>Atuação em instalação e manutenção de hardware, software, VPN, impressoras e sistemas de PDV.</li>
        </ul>
      </div>
      
      {/* Cole o restante das suas experiências aqui */}

    </div>
  );
};

export default ExperienciaPage;