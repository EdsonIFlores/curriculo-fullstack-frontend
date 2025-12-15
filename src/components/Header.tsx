'use client'; 

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" }, // Link para a nova Home
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
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo/Nome */}
        <Link href="/" style={{ fontSize: '1.5em', fontWeight: 'bold', color: 'var(--accent-color)' }}>
          Edson Flores | Full-Stack Dev
        </Link>

        {/* Links de Navegação */}
        <nav>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={pathname === link.href ? 'active' : ''} // Ativa o destaque se for a página atual
              style={{ margin: '0 10px', paddingBottom: '5px' }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;