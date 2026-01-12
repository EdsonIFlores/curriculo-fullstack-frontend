"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

// Adicionei "Alura" ao Type para ficar organizado
type Categoria = "Cisco" | "Udemy" | "SENAI" | "Hackone" | "Alura";

type Certificado = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  categoria: Categoria;
  cargaHoraria?: string;
  data?: string;
};

const CERT_STORAGE_KEY = "certificados_edson_v1";

const certificadosIniciais: Certificado[] = [
  {
    id: "cisco-cybersecurity",
    titulo: "Cybersecurity Essentials",
    descricao: "Cisco Networking Academy • Certificado de conclusão",
    imagem: "/certificados/Certificado.jpg",
    categoria: "Cisco",
    data: "10/07/2024",
  },
  {
    id: "hackone-analista-redes",
    titulo: "Bootcamp Mikrotik Hackone",
    descricao: "Trilha Analista de Redes • 9 horas",
    imagem: "/certificados/analista_de_rede.jpg",
    categoria: "Hackone",
    cargaHoraria: "9h",
  },
  {
    id: "udemy-arquitetura",
    titulo: "Arquitetura de Redes",
    descricao: "Udemy • Certificado de conclusão",
    imagem: "/certificados/arquitetura_de_redes.jpg",
    categoria: "Udemy",
    cargaHoraria: "25h",
    data: "01/07/2024",
  },
  {
    id: "udemy-mikrotik",
    titulo: "Mikrotik do básico ao avançado v2024",
    descricao: "Udemy • Certificado de conclusão",
    imagem: "/certificados/curso_mikrotik.jpg",
    categoria: "Udemy",
    cargaHoraria: "28h",
    data: "15/07/2024",
  },
  {
    id: "senai-fullstack",
    titulo: "Programador Full-Stack",
    descricao: "SENAI • Aperfeiçoamento Profissional",
    imagem: "/certificados/certificadosenai.jpg",
    categoria: "SENAI",
    cargaHoraria: "670h",
    data: "09/01/2026",
  },
  // --- NOVOS CERTIFICADOS ALURA ---
  {
    id: "alura-redes-1",
    titulo: "Redes Parte 1: Conceitos e Prática",
    descricao: "Alura • Formação Redes",
    imagem: "/certificados/redes_I.jpg",
    categoria: "Alura",
    cargaHoraria: "10h",
    data: "10/07/2022",
  },
  {
    id: "alura-redes-2",
    titulo: "Redes Parte 2: Projeto do Cliente ao Provedor",
    descricao: "Alura • Formação Redes",
    imagem: "/certificados/rede_II.jpg",
    categoria: "Alura",
    cargaHoraria: "10h",
    data: "12/07/2022",
  },
  {
    id: "alura-redes-3",
    titulo: "Redes Parte 3: Listas de Controle e Políticas de Acesso",
    descricao: "Alura • Formação Redes",
    imagem: "/certificados/redes_3.jpg",
    categoria: "Alura",
    cargaHoraria: "5h",
    data: "13/07/2022",
  },
  {
    id: "alura-redes-4",
    titulo: "Redes Parte 4: Protocolos de Roteamento e IPv6",
    descricao: "Alura • Formação Redes",
    imagem: "/certificados/redes_4.jpg",
    categoria: "Alura",
    cargaHoraria: "8h",
    data: "13/07/2022",
  },
  {
    id: "alura-redes-5",
    titulo: "Redes Parte 5: Wi-Fi",
    descricao: "Alura • Formação Redes",
    imagem: "/certificados/redes_5.jpg",
    categoria: "Alura",
    cargaHoraria: "6h",
    data: "13/07/2022",
  },
  {
    id: "alura-seguranca-redes",
    titulo: "Segurança de Redes: Vulnerabilidades de Servidores e Clientes",
    descricao: "Alura • Segurança",
    imagem: "/certificados/seguraca_redes.jpg",
    categoria: "Alura",
    cargaHoraria: "10h",
    data: "13/07/2022",
  },
  {
    id: "alura-linux-1",
    titulo: "Linux I: Conhecendo e Utilizando o Terminal",
    descricao: "Alura • Infraestrutura",
    imagem: "/certificados/linux_I.jpg",
    categoria: "Alura",
    cargaHoraria: "4h",
    data: "13/07/2022",
  },
  {
    id: "alura-linux-2",
    titulo: "Linux II: Programas, Processos e Pacotes",
    descricao: "Alura • Infraestrutura",
    imagem: "/certificados/linux_II.jpg",
    categoria: "Alura",
    cargaHoraria: "8h",
    data: "13/07/2022",
  }
];

const categorias: Array<"Todas" | Categoria> = ["Todas", "Cisco", "Udemy", "SENAI", "Hackone", "Alura"];

export default function CertificadosPage() {
  const [busca, setBusca] = useState("");
  const [cat, setCat] = useState<"Todas" | Categoria>("Todas");
  const [lista, setLista] = useState<Certificado[]>(certificadosIniciais);
  const [selecionado, setSelecionado] = useState<Certificado | null>(null);

  // Sincronização com Storage (caso queira manter o reset funcionando)
  useEffect(() => {
    const raw = localStorage.getItem(CERT_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Certificado[];
        if (Array.isArray(parsed) && parsed.length > 0) setLista(parsed);
      } catch { }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CERT_STORAGE_KEY, JSON.stringify(lista));
  }, [lista]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelecionado(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const listaFiltrada = useMemo(() => {
    const b = busca.trim().toLowerCase();
    return lista.filter((c) => {
      const okBusca = b.length === 0 || 
        c.titulo.toLowerCase().includes(b) || 
        c.descricao.toLowerCase().includes(b);
      const okCat = cat === "Todas" || c.categoria === cat;
      return okBusca && okCat;
    });
  }, [busca, cat, lista]);

  function resetarLista() {
    const ok = confirm("Deseja restaurar a lista para a configuração original?");
    if (ok) {
      setLista(certificadosIniciais);
      localStorage.setItem(CERT_STORAGE_KEY, JSON.stringify(certificadosIniciais));
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "#05070c", color: "#e5e7eb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 18px 72px" }}>
        
        <header style={{ textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 950, color: "#22d3ee", textShadow: "0 0 24px rgba(34,211,238,0.25)" }}>
            Meus Certificados
          </h1>
          <p style={{ margin: "10px 0 0", color: "#94a3b8", fontSize: 15 }}>
            Portfólio de cursos e formações concluídas
          </p>
          <div style={{ height: 1, maxWidth: 980, margin: "24px auto 22px", background: "rgba(148,163,184,0.18)" }} />

          {/* Barra de Busca e Filtros */}
          <div style={{ display: "grid", gap: 12, maxWidth: 920, margin: "0 auto 30px" }} className="filters">
            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar certificado (ex: Linux, Redes, Alura...)"
              style={inputStyle}
            />
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {categorias.map((item) => (
                <button
                  key={item}
                  onClick={() => setCat(item)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 999,
                    border: "1px solid rgba(148,163,184,.25)",
                    fontWeight: 950,
                    cursor: "pointer",
                    background: cat === item ? "#22d3ee" : "rgba(2,6,23,.55)",
                    color: cat === item ? "#041018" : "#e5e7eb",
                  }}
                >
                  {item}
                </button>
              ))}
              <button onClick={resetarLista} style={buttonSecondary}>
                Restaurar padrão
              </button>
            </div>
          </div>
        </header>

        {/* Grid de Certificados */}
        <section style={{ display: "grid", gap: 22, gridTemplateColumns: "1fr" }} className="certificados-grid">
          {listaFiltrada.map((c) => (
            <article key={c.id} className="certificados-card" style={cardStyle}>
              <button onClick={() => setSelecionado(c)} style={cardButton}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                  <Image
                    src={c.imagem}
                    alt={c.titulo}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 650px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                </div>
              </button>

              <div style={{ padding: "16px" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <span style={badgeStyle}>{c.categoria}</span>
                  {c.cargaHoraria && <span style={badgeHighlight}>{c.cargaHoraria}</span>}
                  {c.data && <span style={badgeStyle}>{c.data}</span>}
                </div>
                <h3 style={{ margin: "0 0 8px", fontWeight: 950, fontSize: 18 }}>{c.titulo}</h3>
                <p style={{ margin: 0, color: "#94a3b8", fontSize: 14, lineHeight: 1.5 }}>{c.descricao}</p>
                
                <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
                  <button onClick={() => setSelecionado(c)} style={buttonPrimary}>Visualizar</button>
                  <a href={c.imagem} target="_blank" rel="noreferrer" style={buttonSecondaryLink}>Expandir</a>
                </div>
              </div>
            </article>
          ))}
        </section>

        {listaFiltrada.length === 0 && (
          <div style={{ textAlign: "center", padding: "50px", color: "#94a3b8" }}>Nenhum certificado encontrado.</div>
        )}
      </div>

      {/* Modal de Visualização */}
      {selecionado && (
        <div onClick={() => setSelecionado(null)} style={modalOverlay}>
          <div onClick={(e) => e.stopPropagation()} style={modalContent}>
            <div style={modalHeader}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 950, color: "#e5e7eb" }}>{selecionado.titulo}</div>
                <div style={{ color: "#94a3b8", fontSize: 13 }}>{selecionado.descricao}</div>
              </div>
              <button onClick={() => setSelecionado(null)} style={buttonPrimary}>Fechar (ESC)</button>
            </div>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#000" }}>
              <Image src={selecionado.imagem} alt={selecionado.titulo} fill style={{ objectFit: "contain" }} priority />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 650px) {
          .certificados-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .filters { grid-template-columns: 1.2fr 1fr !important; align-items: center; }
        }
        @media (min-width: 980px) {
          .certificados-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        }
        .certificados-card:hover {
          transform: translateY(-5px);
          border-color: rgba(34, 211, 238, 0.35) !important;
        }
      `}</style>
    </main>
  );
}

// --- Estilos Auxiliares ---
const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", borderRadius: 14, border: "1px solid rgba(148,163,184,.25)",
  color: "#e5e7eb", background: "rgba(2,6,23,.55)", outline: "none", fontWeight: 800
};

const cardStyle: React.CSSProperties = {
  background: "rgba(2,6,23,.65)", border: "1px solid rgba(148,163,184,0.20)", borderRadius: 18,
  overflow: "hidden", transition: "all .18s ease"
};

const cardButton: React.CSSProperties = {
  cursor: "pointer", display: "block", width: "100%", border: "none", background: "transparent", padding: 0
};

const badgeStyle: React.CSSProperties = {
  fontSize: 11, fontWeight: 950, padding: "4px 8px", borderRadius: 999, border: "1px solid rgba(148,163,184,.22)", color: "#94a3b8"
};

const badgeHighlight: React.CSSProperties = {
  fontSize: 11, fontWeight: 950, padding: "4px 8px", borderRadius: 999, border: "1px solid rgba(34,211,238,.25)", background: "rgba(34,211,238,.10)", color: "#22d3ee"
};

const buttonPrimary: React.CSSProperties = {
  padding: "8px 16px", borderRadius: 10, border: "none", fontWeight: 950, cursor: "pointer", background: "linear-gradient(90deg,#22d3ee,#3b82f6)", color: "#041018"
};

const buttonSecondary: React.CSSProperties = {
  padding: "10px 12px", borderRadius: 12, border: "1px solid rgba(148,163,184,.25)", background: "rgba(2,6,23,.55)", color: "#e5e7eb", fontWeight: 900, cursor: "pointer"
};

const buttonSecondaryLink: React.CSSProperties = {
  ...buttonSecondary, padding: "8px 16px", textDecoration: "none", fontSize: 14
};

const modalOverlay: React.CSSProperties = {
  position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", display: "grid", placeItems: "center", padding: 20, zIndex: 9999
};

const modalContent: React.CSSProperties = {
  width: "min(1100px, 100%)", background: "#0b1220", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(148,163,184,0.18)"
};

const modalHeader: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px", borderBottom: "1px solid rgba(148,163,184,.18)"
};