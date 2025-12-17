'use client'; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Resumo", href: "/resumo" },
    { name: "Habilidades", href: "/habilidades" },
    { name: "Experiencia", href: "/experiencia" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="header-nav" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(16, 16, 16, 0.95)', // Fundo semi-transparente para leitura
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="header-container">
        {/* Logo/Nome - Ajustado para ser menor no mobile */}
        <Link href="/" className="header-logo">
          Edson Flores <span className="dev-tag">| Full-Stack Dev</span>
        </Link>

        {/* Links de Navegação - Com scroll horizontal no mobile */}
        <nav className="header-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`nav-item ${pathname === link.href ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <style jsx>{`
        .header-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-logo {
          font-size: 1.3rem;
          font-weight: bold;
          color: var(--accent-color);
          text-decoration: none;
          white-space: nowrap;
        }

        .header-links {
          display: flex;
          gap: 15px;
        }

        .nav-item {
          text-decoration: none;
          color: var(--text-light);
          font-size: 0.95rem;
          padding-bottom: 5px;
          transition: 0.3s;
        }

        .nav-item.active {
          border-bottom: 2px solid var(--primary-color);
          color: var(--primary-color);
        }

        /* AJUSTES PARA CELULAR */
        @media (max-width: 768px) {
          .header-container {
            flex-direction: column; /* Empilha Nome e Links */
            padding: 10px;
            gap: 10px;
          }

          .header-logo {
            font-size: 1.1rem;
          }

          .dev-tag {
            display: none; /* Esconde o sufixo no mobile para poupar espaço */
          }

          .header-links {
            width: 100%;
            justify-content: center;
            overflow-x: auto; /* Permite deslizar os links se a tela for pequena */
            padding-bottom: 5px;
          }

          .nav-item {
            font-size: 0.85rem;
            margin: 0 5px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;