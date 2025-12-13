import React from 'react';

interface SkillProps {
  title: string;
  items: string[];
}

const SkillsSection: React.FC<SkillProps> = ({ title, items }) => (
  <div style={{ marginBottom: '20px', borderLeft: '3px solid #0070f3', paddingLeft: '15px' }}>
    <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px', color: '#333' }}>
      {title}
    </h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {items.map((item, index) => (
        <span 
          key={index} 
          style={{ 
            backgroundColor: '#0070f3', 
            color: 'white', 
            padding: '5px 10px', 
            borderRadius: '5px', 
            fontSize: '0.9em' 
          }}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const EdsonSkills: React.FC = () => {
  const devSkills = [
    'Análise e Desenvolvimento de Sistemas (Estudante)', 
    'JavaScript', 
    'Node.js', 
    'Express.js', 
    'React (Next.js)', 
    'MongoDB (MERN Stack)',
    'Git/GitHub'
  ];

  const infraSkills = [
    'Linux (Administração e Suporte)', 
    'Administração de Redes', 
    'Servidores (Windows/Linux)', 
    'VPN', 
    'Infraestrutura de TI',
    'MikroTik',
    'Segurança de Rede (Cisco Cybersecurity Essentials)'
  ];

  const techSupportSkills = [
    'TOTVS Protheus', 
    'Suporte Técnico (Nível Sr.)', 
    'Resolução de Problemas', 
    'Hardware e Software', 
    'Atendimento ao Cliente',
    'Office 365', 
    'Análise de Dados'
  ];

  return (
    <div>
      <h2 style={{ color: '#0070f3', marginTop: '30px' }}>🎯 Habilidades Técnicas</h2>
      <SkillsSection title="Desenvolvimento (Full-Stack em Formação)" items={devSkills} />
      <SkillsSection title="Infraestrutura e Redes" items={infraSkills} />
      <SkillsSection title="Suporte e Operações de TI" items={techSupportSkills} />
    </div>
  );
};

export default EdsonSkills;
