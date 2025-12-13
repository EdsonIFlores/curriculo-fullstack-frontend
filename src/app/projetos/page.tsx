import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string; // Opcional: para projetos que já estão no ar
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, repoLink, liveLink }) => (
  <div style={{ 
    border: '1px solid #ddd', 
    padding: '20px', 
    marginBottom: '25px', 
    borderRadius: '8px', 
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: 'white'
  }}>
    <h3 style={{ color: '#0070f3', marginTop: '0', borderBottom: '1px dotted #eee', paddingBottom: '10px' }}>
      {title}
    </h3>
    
    <p style={{ fontSize: '0.9em', color: '#333', marginBottom: '15px', fontWeight: 'bold' }}>
      Tecnologias: {techStack.join(' | ')}
    </p>

    <p style={{ lineHeight: '1.5', color: '#555' }}>{description}</p>
    
    <div style={{ marginTop: '20px' }}>
      <Link 
        href={repoLink} 
        target="_blank" 
        style={{ 
          marginRight: '15px', 
          textDecoration: 'none', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          padding: '8px 15px',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        Acessar Repositório (GitHub)
      </Link>
      {liveLink && (
        <Link 
          href={liveLink} 
          target="_blank" 
          style={{ 
            textDecoration: 'none', 
            color: '#10b981', 
            fontWeight: 'bold',
            border: '1px solid #10b981',
            padding: '8px 15px',
            borderRadius: '5px'
          }}
        >
          Ver Projeto Online
        </Link>
      )}
    </div>
  </div>
);

const ProjetosPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5em', borderBottom: '2px solid #0070f3', paddingBottom: '10px', marginBottom: '10px' }}>
        🚀 Portfólio de Desenvolvimento
      </h1>
      <h2 style={{ color: '#555', fontSize: '1.2em', marginBottom: '30px' }}>
        Amostra de aplicações desenvolvidas com foco em Full-Stack (MERN) e soluções de Infraestrutura.
      </h2>

      {/* --------------------------- */}
      {/* 1. SEU PROJETO ATUAL (Currículo Full-Stack) */}
      {/* --------------------------- */}
      <ProjectCard
        title="Currículo Interativo Full-Stack (MERN)"
        description="Esta aplicação serve como meu currículo online. Demonstra proficiência em desenvolvimento Full-Stack, com um Frontend em Next.js (React) para a interface do usuário e um Backend em Node.js/Express para gerenciar o formulário de contato e persistir dados no MongoDB Atlas."
        techStack={['Next.js (React)', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JavaScript/TypeScript', 'Git']}
        repoLink="https://github.com/EdsonIFlores/curriculo-fullstack-frontend"
      />

      {/* --------------------------- */}
      {/* 2. PROJETO DE BACKEND/INFRA (Sugestão baseada em suas skills) */}
      {/* --------------------------- */}
      <ProjectCard
        title="Ferramenta de Monitoramento de Rede (Node.js/Linux)"
        description="Desenvolvimento de scripts ou aplicação backend para monitorar a saúde de serviços críticos em um ambiente Linux. Foco em automação de tarefas de infraestrutura e gerenciamento de rede (skills Mikrotik/Linux)."
        techStack={['Node.js', 'Linux', 'Bash Scripting', 'MikroTik', 'Infraestrutura de TI']}
        repoLink="https://github.com/EdsonIFlores/SEU_PROJETO_DE_MONITORAMENTO" 
      />
      
      {/* --------------------------- */}
      {/* 3. PROJETO DE FRONTEND/DADOS (Sugestão baseada em suas skills) */}
      {/* --------------------------- */}
      <ProjectCard
        title="Dashboard de Análise de Suporte (React/Dados)"
        description="Protótipo de uma dashboard interativa desenvolvida em React para visualizar dados de suporte técnico (tempo de resposta, taxa de resolução, etc.). Foca na usabilidade e visualização de dados."
        techStack={['React', 'Análise de Dados', 'Gráficos (Chart.js ou similar)', 'JavaScript', 'HTML/CSS']}
        repoLink="https://github.com/EdsonIFlores/SEU_PROJETO_DE_DASHBOARD"
      />

    </div>
  );
};

export default ProjetosPage;