import React from 'react';
// 🔴 ATENÇÃO: Verifique o caminho. Se você manteve 'components/' na raiz do 'src/', use '../components/SkillsSection'
import EdsonSkills from '../../components/SkillsSection'; 

const HabilidadesPage: React.FC = () => {
  return (
    <div className="container-page">
      <h2 className="section-title">
        🎯 Detalhamento de Habilidades Técnicas
      </h2>
      
      <EdsonSkills />
      
    </div>
  );
};

export default HabilidadesPage;