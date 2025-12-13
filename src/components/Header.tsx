import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: '#282c34', 
      color: 'white', 
      padding: '20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)' // Adiciona uma sombra para profundidade
    }}>
      <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
          Edson Flores 
        </Link>
        <span style={{ color: 'white', fontSize: '0.9em', marginLeft: '5px' }}>| Full-Stack Dev</span>
      </div>
      <nav>
        <Link href="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none', transition: 'color 0.2s' }}>
          Resumo
        </Link>
        <Link href="/projetos" style={{ margin: '0 15px', color: 'white', textDecoration: 'none', transition: 'color 0.2s' }}>
          Projetos
        </Link>
        <Link 
          href="/contact" 
          style={{ 
            margin: '0 15px', 
            textDecoration: 'none', 
            backgroundColor: '#0070f3', 
            padding: '8px 15px', 
            borderRadius: '5px', 
            color: 'white', 
            fontWeight: 'bold' 
          }}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header;