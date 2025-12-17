'use client';

import React from 'react';
import styles from './experiencia.module.css';

const experiencias = [
  {
    cargo: "Técnico de Sistemas de Informação",
    empresa: "Dexian (Alocado na Cargill)",
    periodo: "Dez 2025 - Momento",
    local: "Barreiras, BA",
    descricao: "Suporte e manutenção de sistemas de TI para garantir a continuidade operacional das atividades da Cargill.",
    competencias: ["TOTVS Protheus", "Windows 7", "Suporte Sistemas"]
  },
  {
    cargo: "Analista de Suporte Técnico",
    empresa: "Quality Digital",
    periodo: "Dez 2024 - Momento",
    local: "Híbrido",
    descricao: "Administração de redes, servidores, VPN e gestão de infraestrutura de TI.",
    competencias: ["Redes", "Servidores", "VPN", "Linux", "Infraestrutura"]
  },
  {
    cargo: "Analista de Infraestrutura",
    empresa: "Dantas",
    periodo: "Jun 2024 - Abr 2025",
    local: "Barreiras, BA",
    descricao: "Operações de rede, segurança via VPN e resolução de problemas técnicos complexos.",
    competencias: ["Wireless", "Troubleshooting", "VPN", "Segurança"]
  },
  {
    cargo: "Analista de Suporte Técnico",
    empresa: "UFOB (Univ. Federal do Oeste da Bahia)",
    periodo: "Jan 2024 - Abr 2024",
    local: "Barreiras, BA",
    descricao: "Operações de TI e rede, suporte ao cliente e manutenção de servidores Windows.",
    competencias: ["Office 365", "Servidor Windows", "Hardware", "Redes"]
  },
  {
    cargo: "Analista de Sistemas",
    empresa: "Delta Alumínios",
    periodo: "Out 2023 - Jan 2024",
    local: "Rio Verde, GO",
    descricao: "Administração de redes e servidores em ambiente industrial.",
    competencias: ["Redes", "Windows 10", "Servidores"]
  },
  {
    cargo: "Técnico Administrativo SR",
    empresa: "Rumo",
    periodo: "Dez 2022 - Out 2023",
    local: "Rio Verde, GO",
    descricao: "Liderança de projetos, gestão SAP e análise de dados operacionais.",
    competencias: ["SAP", "Liderança", "Gestão de Projetos", "Análise de Dados"]
  },
  {
    cargo: "Analista de Suporte Técnico",
    empresa: "Quality S.A.",
    periodo: "Mai 2022 - Dez 2022",
    local: "Rio Verde, GO",
    descricao: "Controle de acesso, redes LAN e manutenção preventiva de hardware.",
    competencias: ["LAN", "Controle de Acesso", "Hardware", "Cabeamento"]
  },
  {
    cargo: "Suporte Técnico",
    empresa: "CDI",
    periodo: "Fev 2021 - Mai 2022",
    local: "Barreiras, BA",
    descricao: "Instalação de redes estruturadas, manutenção de computadores e suporte ao usuário final.",
    competencias: ["Redes sem fio", "Hardware", "Atendimento"]
  },
  {
    cargo: "Técnico em Segurança Eletrônica",
    empresa: "Proteção Alarmes",
    periodo: "Dez 2020 - Dez 2021",
    local: "Barreiras, BA",
    descricao: "Instalação e manutenção de sistemas de segurança eletrônica e monitoramento interno.",
    competencias: ["CFTV", "Segurança Eletrônica", "Redes"]
  },
  {
    cargo: "Técnico de Informática",
    empresa: "Severinos / CW / Pereira",
    periodo: "2013 - 2017",
    local: "Barreiras / Barretos",
    descricao: "Início da carreira com manutenção de hardware, redes e suporte técnico de campo.",
    competencias: ["Manutenção", "Sistemas Operacionais", "Hardware"]
  }
];

export default function ExperienciaPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.sectionTitle}>Trajetória Profissional</h2>
      
      <div className={styles.timeline}>
        {experiencias.map((exp, index) => (
          <div key={index} className={styles.expCard}>
            <div className={styles.cardHeader}>
              <span className={styles.periodo}>{exp.periodo}</span>
              <span className={styles.local}>{exp.local}</span>
            </div>
            
            <h3 className={styles.jobTitle}>{exp.cargo}</h3>
            <h4 className={styles.company}>{exp.empresa}</h4>
            
            <p className={styles.description}>{exp.descricao}</p>
            
            <div className={styles.skillsTagContainer}>
              {exp.competencias.map((skill, sIndex) => (
                <span key={sIndex} className={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}