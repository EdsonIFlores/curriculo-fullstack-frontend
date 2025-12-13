import React from 'react';
// Certifique-se de que este caminho está correto: subir um nível (..) para chegar em components
import EdsonSkills from '../components/SkillsSection'; 

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

      {/* ... (O restante da sua experiência omitido por brevidade, mas deve ser colado) ... */}
      
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
      
      {/* Adicione o restante das experiências e a Formação aqui, como no código que você colou antes. */}

    </div>
  );
};

export default HomePage;