import React from 'react';
import Link from 'next/link';
// Importa o componente que exibe sua foto de perfil em círculo
import ProfileImage from '../components/ProfileImage'; 
// Assumindo que você ainda precisa importar o SkillsSection, se ele estiver na home
// import EdsonSkills from '../components/SkillsSection'; 

const HomePage: React.FC = () => {
    return (
        <div className="container-page" style={{ textAlign: 'center' }}>
            
            {/* 1. FOTO DE PERFIL (ProfileImage) */}
            {/* Este componente renderiza a sua foto 'foto-perfil.jpg' no círculo azul */}
            <ProfileImage />
            
            {/* 2. Resumo Breve */}
            <h1 style={{ fontSize: '3em', borderBottom: '2px solid var(--primary-color)', paddingBottom: '10px' }}>
                Olá! Eu sou Edson Iago Flores
            </h1>
            <h2 style={{ color: 'var(--accent-color)', fontSize: '1.6em', marginBottom: '30px' }}>
                Especialista em Suporte de TI | Desenvolvedor Full-Stack em Formação
            </h2>

            <p style={{ lineHeight: '1.8', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
               Desenvolvedor **Full-Stack (MERN)** em transição de carreira, com uma base estratégica consolidada em **Infraestrutura de TI e Sistemas Corporativos**. Essa experiência me fornece uma visão completa sobre **escalabilidade, segurança e arquitetura**, essencial para construir aplicações robustas. Sou proativo, focado em **resolução de problemas complexos** e dedicado ao aprendizado contínuo do ecossistema moderno **(MongoDB, Express, React, Node.js)**. Busco aplicar meu conhecimento multidisciplinar em desafios de desenvolvimento que exijam soluções eficientes do front-end ao back-end.
</p>

            {/* 3. Botão de Contato */}
            <Link href="/contato" className="main-button">
                Fale Comigo! 📧
            </Link>
            
            {/* 4. Link para Ver o Currículo Completo */}
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
                ou <Link href="/resumo" style={{ color: 'var(--primary-color)' }}>veja o resumo completo</Link>
            </p>
            
            {/* Se você tiver o SkillsSection na Home, descomente a linha abaixo */}
            {/* <EdsonSkills /> */}

        </div>
    );
};

export default HomePage;