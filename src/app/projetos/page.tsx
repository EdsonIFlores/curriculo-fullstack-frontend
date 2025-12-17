'use client';

import React from 'react';
import Link from 'next/link';
import styles from './projetos.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  repoLink: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, repoLink, liveLink }) => (
  <div className={styles.projectCard}>
    <h3 className={styles.projectTitle}>{title}</h3>
    
    <p className={styles.techList}>
      {techStack.join(' • ')}
    </p>

    <p className={styles.description}>{description}</p>
    
    <div className={styles.buttonGroup}>
      <Link href={repoLink} target="_blank" className={styles.btnPrimary}>
        GitHub Repository
      </Link>
      {liveLink && (
        <Link href={liveLink} target="_blank" className={styles.btnSecondary}>
          Live Preview
        </Link>
      )}
    </div>
  </div>
);

const ProjetosPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🚀 Portfólio de Projetos</h1>
      <p className={styles.subtitle}>
        Amostra de aplicações Full-Stack e soluções de Infraestrutura.
      </p>

      <ProjectCard
        title="Currículo Interativo Full-Stack (MERN)"
        description="Aplicação de currículo online com Frontend em Next.js e Backend em Node.js para gestão de contatos e persistência de dados no MongoDB."
        techStack={['Next.js', 'Node.js', 'Express.js', 'MongoDB']}
        repoLink="https://github.com/EdsonIFlores/curriculo-fullstack-frontend"
      />

      <ProjectCard
        title="Ferramenta de Monitoramento de Rede"
        description="Scripts em Node.js para monitorar saúde de serviços em Linux/Mikrotik, automatizando tarefas de infraestrutura."
        techStack={['Node.js', 'Linux', 'Bash', 'MikroTik']}
        repoLink="https://github.com/EdsonIFlores/projeto-monitoramento" 
      />
      
      <ProjectCard
        title="Dashboard de Análise de Suporte"
        description="Painel interativo em React para visualização de métricas de suporte técnico e desempenho de rede."
        techStack={['React', 'Análise de Dados', 'Chart.js']}
        repoLink="https://github.com/EdsonIFlores/dashboard-suporte"
      />
    </main>
  );
};

export default ProjetosPage;