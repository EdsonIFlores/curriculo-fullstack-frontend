'use client';

import React from 'react';
import styles from './experiencia.module.css'; 

export default function ExperienciaPage() {
  return (
    <main className={styles.container}>
      {/* COLUNA ESQUERDA: TRAJETÓRIA */}
      <section>
        <h2 className={styles.sectionTitle}>Trajetória Profissional</h2>
        <p className={styles.sectionSubtitle}>Mais de 10 anos de experiência em TI</p>

        <div className={styles.timeline}>
          {/* EXPERIÊNCIA 1 */}
          <div className={styles.expCard}>
            <span className={styles.badgeDestaque}>DESTAQUE</span>
            <h3 className={styles.jobTitle}>Técnico de Sistemas</h3>
            <p className={styles.companyName}>Dexian (Cargill)</p>
            <p className={styles.dateText}>Dez 2025 - Momento</p>
            <p className={styles.description}>
              Suporte e manutenção de sistemas de TI para garantir a continuidade operacional, focado em ERP e suporte N2.
            </p>
            <div className={styles.miniTags}>
              <span>TOTVS Protheus</span>
              <span>Suporte N2</span>
            </div>
          </div>

          {/* EXPERIÊNCIA 2 */}
          <div className={styles.expCard}>
            <span className={styles.badgeAtual}>ATUAL</span>
            <h3 className={styles.jobTitle}>Analista de Suporte</h3>
            <p className={styles.companyName}>Quality Digital</p>
            <p className={styles.dateText}>Dez 2024 - Momento</p>
            <p className={styles.description}>
              Administração de redes, gestão de infraestrutura híbrida e análise crítica de performance de servidores.
            </p>
          </div>

          {/* EXPERIÊNCIA 3 (NOVA) */}
          <div className={styles.expCard}>
            <h3 className={styles.jobTitle}>Analista de Infraestrutura</h3>
            <p className={styles.companyName}>Dantas - Traiene</p>
            <p className={styles.dateText}>Jun 2024 - Abr 2025</p>
            <p className={styles.description}>
              Implementação de soluções de redes sem fio, troubleshooting avançado e suporte a sistemas ERP.
            </p>
          </div>
        </div>
      </section>

      {/* COLUNA DIREITA: HABILIDADES */}
      <section>
        <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
        <p className={styles.sectionSubtitle}>Clique para ver as tecnologias específicas</p>

        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <span style={{fontSize: '2rem'}}>⚛️</span>
            <h3>Full-Stack Dev</h3>
          </div>
          <div className={styles.tagsGrid}>
            <div className={styles.tagGray}>React.js</div>
            <div className={styles.tagGray}>Next.js</div>
            <div className={styles.tagGray}>Node.js</div>
            <div className={styles.tagGray}>TypeScript</div>
            <div className={styles.tagGray}>MongoDB</div>
            <div className={styles.tagGray}>PostgreSQL</div>
          </div>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <span style={{fontSize: '2rem'}}>🖥️</span>
            <h3>Infraestrutura & Redes</h3>
          </div>
          <div className={styles.tagsGrid}>
            <div className={styles.tagGray}>Windows Server</div>
            <div className={styles.tagGray}>Linux (Ubuntu/Debian)</div>
            <div className={styles.tagGray}>VPN / Firewall</div>
            <div className={styles.tagGray}>Virtualização (VMware)</div>
            <div className={styles.tagGray}>Active Directory</div>
            <div className={styles.tagGray}>Redes Estruturadas</div>
          </div>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <span style={{fontSize: '2rem'}}>🛡️</span>
            <h3>Segurança & Tools</h3>
          </div>
          <div className={styles.tagsGrid}>
            <div className={styles.tagGray}>TOTVS Protheus</div>
            <div className={styles.tagGray}>Gestão de TI</div>
            <div className={styles.tagGray}>Backup & Recovery</div>
            <div className={styles.tagGray}>Monitoramento</div>
          </div>
        </div>
      </section>
    </main>
  );
}