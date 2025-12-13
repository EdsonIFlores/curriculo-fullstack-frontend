import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      backgroundColor: '#282c34', 
      color: 'white', 
      padding: '30px 20px', 
      textAlign: 'center',
      borderTop: '5px solid #0070f3', // Detalhe azul que combina com o Header
      marginTop: '40px'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h3 style={{ margin: '0 0 10px', color: 'white' }}>Edson Iago Flores</h3>
        <p style={{ margin: '0 0 20px', fontSize: '0.9em' }}>
          Tecnologia | Suporte de TI | Full-Stack em Formação
        </p>

        <div style={{ marginBottom: '20px' }}>
          <Link 
            href="https://www.linkedin.com/in/edson-iago-flores-7767a5a6" 
            target="_blank" 
            style={{ 
              color: '#0070f3', 
              margin: '0 15px', 
              fontWeight: 'bold', 
              textDecoration: 'none',
              backgroundColor: 'white',
              padding: '8px 15px',
              borderRadius: '5px'
            }}
          >
            LinkedIn
          </Link>
          <Link 
            href="https://github.com/EdsonIFlores" 
            target="_blank" 
            style={{ 
              color: '#282c34', 
              margin: '0 15px', 
              fontWeight: 'bold', 
              textDecoration: 'none',
              backgroundColor: '#a3a6ad',
              padding: '8px 15px',
              borderRadius: '5px'
            }}
          >
            GitHub
          </Link>
          <Link 
            href="/contact" 
            style={{ 
              color: 'white', 
              margin: '0 15px', 
              fontWeight: 'bold', 
              textDecoration: 'none',
              border: '1px solid white',
              padding: '8px 15px',
              borderRadius: '5px'
            }}
          >
            Fale Comigo
          </Link>
        </div>

        <p style={{ margin: '0', fontSize: '0.8em', color: '#ccc' }}>
          &copy; {new Date().getFullYear()} Edson Iago Flores. Construído com Next.js e paixão por tecnologia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
