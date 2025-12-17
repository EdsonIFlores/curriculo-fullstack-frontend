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
    { name: "Projetos", href: "/projetos" }, 
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="header-nav">
      <div className="header-container">
        <Link href="/" className="logo">
          Edson Flores <span className="dev-tag">| Full-Stack Dev</span>
        </Link>

        <nav className="nav-links">
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
    </header>
  );
};

export default Header;