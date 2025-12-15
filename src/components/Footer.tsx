import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '20px 0',
      textAlign: 'center',
      color: 'var(--text-secondary)',
      fontSize: '0.9em',
      marginTop: 'auto',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <p>&copy; {new Date().getFullYear()} Edson Iago Flores. Construído com Next.js.</p>
        <p style={{ marginTop: '10px' }}>
          <a href="URL_LINKEDIN" target="_blank" style={{ color: 'var(--primary-color)', margin: '0 10px' }}>LinkedIn</a> |
          <a href="URL_GITHUB" target="_blank" style={{ color: 'var(--primary-color)', margin: '0 10px' }}>GitHub</a> |
          <a href="mailto:SEU_EMAIL" style={{ color: 'var(--primary-color)', margin: '0 10px' }}>SEU_EMAIL</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;