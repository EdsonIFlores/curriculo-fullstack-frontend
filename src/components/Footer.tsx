import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '30px 0',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      marginTop: 'auto', // Faz o rodapé "empurrar" para o fundo
      width: '100%'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <p style={{ marginBottom: '10px' }}>
          &copy; {new Date().getFullYear()} <strong>Edson Iago Flores</strong>. 
          <span className="hide-mobile"> Construído com Next.js & TypeScript.</span>
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          flexWrap: 'wrap',
          alignItems: 'center' 
        }}>
          <a 
            href="https://www.linkedin.com/in/edson-iago-flores-7767a5a6/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '500' }}
          >
            LinkedIn
          </a> 
          <span style={{ color: 'var(--border-color)' }}>|</span>
          
          <a 
            href="https://github.com/edsoniflores" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '500' }}
          >
            GitHub
          </a> 
          <span style={{ color: 'var(--border-color)' }}>|</span>
          
          <a 
            href="mailto:tec.edsonsilva.es@gmail.com" 
            style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '500' }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;