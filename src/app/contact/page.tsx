import React from 'react';
import EdsonSkills from '../../components/SkillsSection'; // Corrigido

const HomePage: React.FC = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      
      {/* --------------------------- */}
      {/* 1. SEÇÃO DE RESUMO (TOPO) */}
      {/* --------------------------- */}
      <h1 style={{ fontSize: '2.5em', borderBottom: '2px solid #0070f3', paddingBottom: '10px' }}>
        Edson Iago Flores
      </h1>
      <h2 style={{ color: '#555', fontSize: '1.4em', marginBottom: '20px' }}>
        Profissional de Tecnologia | Especialista em Suporte Técnico de TI | Desenvolvedor Full-Stack em Formação
      </h2>

      <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
        Sou um entusiasta da tecnologia com **mais de 13 anos de experiência em suporte técnico de TI** em ambientes corporativos e clínicos. Minha paixão pela tecnologia e compromisso com a excelência me impulsionam a buscar constante desenvolvimento e atualização profissional. Atualmente, estou ampliando meus horizontes acadêmicos ao cursar **Análise e Desenvolvimento de Sistemas** (Unopa) e **Ciência da Computação** (IFG), focando no **desenvolvimento Full-Stack (MERN)** para enfrentar os desafios do mercado com uma base sólida e moderna. Reconhecido por minha **proatividade, extroversão e comunicação eficaz** com diversos públicos.
      </p>

      {/* --------------------------- */}
      {/* 2. SEÇÃO DE HABILIDADES */}
      {/* --------------------------- */}
      <EdsonSkills />

      {/* --------------------------- */}
      {/* 3. SEÇÃO DE EXPERIÊNCIA */}
      {/* --------------------------- */}
      <h2 style={{ color: '#0070f3', marginTop: '40px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        💼 Experiência Profissional
      </h2>

      {/* Cargo 1: Técnico de sistemas de informação - Dexian (Cargill) */}
      <div style={{ marginBottom: '25px', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h3 style={{ margin: '0', color: '#333' }}>Técnico de Sistemas de Informação</h3>
        <p style={{ margin: '5px 0', fontSize: '1.1em', fontWeight: 'bold' }}>Dexian (Alocado na Cargill)</p>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '0.9em' }}>dez de 2025 – o momento (Barreiras, BA)</p>
        <ul style={{ paddingLeft: '20px', margin: '10px 0 0' }}>
          <li>Suporte e manutenção de sistemas de TI para garantir a continuidade operacional das atividades, com foco em sistemas como TOTVS Protheus.</li>
        </ul>
      </div>

      {/* Cargo 2: Analista de suporte técnico - Quality Digital */}
      <div style={{ marginBottom: '25px', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h3 style={{ margin: '0', color: '#333' }}>Analista de Suporte Técnico</h3>
        <p style={{ margin: '5px 0', fontSize: '1.1em', fontWeight: 'bold' }}>Quality Digital</p>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '0.9em' }}>dez de 2024 – o momento (1 ano 1 mês) | Híbrida</p>
        <ul style={{ paddingLeft: '20px', margin: '10px 0 0' }}>
          <li>Responsável pela administração de redes, análise e resolução de problemas complexos em Servidores (Windows/Linux) e infraestrutura de TI.</li>
          <li>Atuação em instalação e manutenção de hardware, software, VPN, impressoras e sistemas de PDV.</li>
        </ul>
      </div>

      {/* Cargo 3: Analista de infraestrutura - Dantas */}
      <div style={{ marginBottom: '25px', padding: '15px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h3 style={{ margin: '0', color: '#333' }}>Analista de Infraestrutura</h3>
        <p style={{ margin: '5px 0', fontSize: '1.1em', fontWeight: 'bold' }}>Dantas</p>
        <p style={{ margin: '5px 0', color: '#666', fontSize: '0.9em' }}>jun de 2024 – abr de 2025 (11 meses) | Presencial</p>
        <ul style={{ paddingLeft: '20px', margin: '10px 0 0' }}>
          <li>Atuação em administração de redes, operações de rede de computadores e infraestrutura geral de TI, com foco em Linux e Servidores.</li>
        </ul>
      </div>

      {/* --------------------------- */}
      {/* 4. SEÇÃO DE FORMAÇÃO */}
      {/* --------------------------- */}
      <h2 style={{ color: '#0070f3', marginTop: '40px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        🎓 Formação e Certificações
      </h2>

      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ margin: '0' }}>Ciência da Computação (Bacharelado)</h3>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Instituto Federal de Goiás (IFG)</p>
        <p style={{ margin: '5px 0', color: '#666' }}>mar de 2023 - mar de 2027</p>
      </div>

       <div style={{ marginBottom: '15px' }}>
        <h3 style={{ margin: '0' }}>Cybersecurity Essentials</h3>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Cisco Networking Academy</p>
        <p style={{ margin: '5px 0', color: '#666' }}>jul de 2024</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ margin: '0' }}>Bootcamp Mikrotik em Prática</h3>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Hackone</p>
        <p style={{ margin: '5px 0', color: '#666' }}>jul de 2024</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ margin: '0' }}>Formação em Administração de Redes</h3>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Alura</p>
        <p style={{ margin: '5px 0', color: '#666' }}>jul de 2022</p>
      </div>

    </div>
  );
};

export default HomePage;