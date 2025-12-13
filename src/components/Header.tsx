import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: '#282c34', 
      color: 'white', 
      padding: '20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
        Edson Flores | Full-Stack Developer
      </div>
      <nav>
        <Link href="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>
          Resumo
        </Link>
        <Link href="/projetos" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>
          Projetos
        </Link>
        <Link href="/contact" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>
          Contato
        </Link>
      </nav>
    </header>
  );
};

export default Header;import type { Metadata } from "next";
// Importar os componentes Header e Footer
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 

// ... (Resto do seu código de Metadata) ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header /> {/* Adiciona o Cabeçalho aqui */}
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          {children} 
        </main>
        <Footer /> {/* Adiciona o Rodapé aqui */}
      </body>
    </html>
  );
}
