'use client';

import React from 'react';
import styles from './habilidades.module.css';

const gruposHabilidades = [
  {
    titulo: "Desenvolvimento & Web",
    icone: "⚛️",
    cor: "#00d1ff",
    tags: ["React.js", "Next.js", "Node.js", "TypeScript", "JavaScript", "REST APIs", "HTML5/CSS3", "Git/GitHub"]
  },
  {
    titulo: "Infraestrutura & Redes",
    icone: "🖥️",
    cor: "#00ff88",
    tags: ["Windows Server", "Linux (Ubuntu/Debian)", "Administração de Redes", "VPN", "Firewalls", "Virtualização", "Active Directory", "Cabeamento Estruturado", "Hardware"]
  },
  {
    titulo: "Sistemas & Gestão TI",
    icone: "🛡️",
    cor: "#ffcc00",
    tags: ["TOTVS Protheus", "SAP", "ERP", "Cybersecurity", "Backup & Recovery", "Monitoramento (Zabbix)", "Suporte Técnico Nivel 2/3", "Gestão de Ativos"]
  }
];

export default function HabilidadesPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
      <p className={styles.sectionSubtitle}>Expertise técnica adquirida ao longo da trajetória profissional</p>
      
      <div className={styles.gridHabilidades}>
        {gruposHabilidades.map((grupo, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <span className={styles.icone} style={{ textShadow: `0 0 10px ${grupo.cor}` }}>
                {grupo.icone}
              </span>
              <h3 style={{ color: grupo.cor }}>{grupo.titulo}</h3>
            </div>
            
            <div className={styles.tagsGrid}>
              {grupo.tags.map((tag, tIndex) => (
                <span key={tIndex} className={styles.tagItem}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}