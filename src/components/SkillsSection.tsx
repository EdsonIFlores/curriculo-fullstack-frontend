import React from 'react';

const skillCategories = [
    {
        title: '💻 Desenvolvimento Full-Stack (Foco MERN)',
        skills: ['JavaScript (ES6+)', 'Node.js', 'React.js', 'Next.js', 'Express.js', 'MongoDB', 'HTML5/CSS3', 'Git/GitHub'],
    },
    {
        title: '⚙️ Infraestrutura e Suporte de TI',
        skills: ['Suporte Técnico N3', 'Administração Windows/Linux Server', 'Redes e VPN', 'TOTVS Protheus (Suporte)', 'MikroTik', 'Troubleshooting Avançado', 'Automação (Scripts Python)'],
    },
    {
        title: '💡 Habilidades Comportamentais',
        skills: ['Proatividade', 'Comunicação Interpessoal', 'Extroversão', 'Resolução de Problemas', 'Orientação a Resultados'],
    },
];

const SkillsSection: React.FC = () => {
    return (
        <section id="habilidades" style={{ marginTop: '40px' }}>
            <h2 style={{ color: 'var(--primary-color)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '20px', fontSize: '1.8em' }}>
                🛠️ Habilidades Técnicas e Comportamentais
            </h2>
            
            {skillCategories.map((category, index) => (
                <div key={index} style={{ marginBottom: '25px' }}>
                    <h4 style={{ color: 'var(--text-light)', marginBottom: '10px' }}>{category.title}</h4>
                    <div>
                        {category.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default SkillsSection;