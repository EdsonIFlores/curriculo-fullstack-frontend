"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Categoria = "Cisco" | "Udemy" | "SENAI" | "Hackone";

type Certificado = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string; // /public
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
];

const categorias: Array<"Todas" | Categoria> = ["Todas", "Cisco", "Udemy", "SENAI", "Hackone"];

function uid() {
  return crypto?.randomUUID?.() ?? `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function CertificadosPage() {
  const [busca, setBusca] = useState("");
  const [cat, setCat] = useState<"Todas" | Categoria>("Todas");

  // lista dinâmica (localStorage)
  const [lista, setLista] = useState<Certificado[]>(certificadosIniciais);

  // modal de visualização
  const [selecionado, setSelecionado] = useState<Certificado | null>(null);

  // modal adicionar
  const [openAdd, setOpenAdd] = useState(false);

  const [novo, setNovo] = useState({
    titulo: "",
    descricao: "",
    imagem: "/certificados/",
    categoria: "Udemy" as Categoria,
    cargaHoraria: "",
    data: "",
  });

  // carregar do storage
  useEffect(() => {
    const raw = localStorage.getItem(CERT_STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Certificado[];
        if (Array.isArray(parsed) && parsed.length > 0) setLista(parsed);
      } catch {
        // ignora erro
      }
    }
  }, []);

  // salvar no storage quando mudar
  useEffect(() => {
    localStorage.setItem(CERT_STORAGE_KEY, JSON.stringify(lista));
  }, [lista]);

  // fechar modais com ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelecionado(null);
        setOpenAdd(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const listaFiltrada = useMemo(() => {
    const b = busca.trim().toLowerCase();

    return lista.filter((c) => {
      const okBusca =
        b.length === 0 ||
        c.titulo.toLowerCase().includes(b) ||
        c.descricao.toLowerCase().includes(b);

      const okCat = cat === "Todas" || c.categoria === cat;

      return okBusca && okCat;
    });
  }, [busca, cat, lista]);

  function adicionarCertificado() {
    if (!novo.titulo.trim() || !novo.descricao.trim() || !novo.imagem.trim()) return;

    const cert: Certificado = {
      id: uid(),
      titulo: novo.titulo.trim(),
      descricao: novo.descricao.trim(),
      imagem: novo.imagem.trim(),
      categoria: novo.categoria,
      cargaHoraria: novo.cargaHoraria.trim() || undefined,
      data: novo.data.trim() || undefined,
    };

    setLista((prev) => [cert, ...prev]); // adiciona no topo
    setOpenAdd(false);
    setNovo({
      titulo: "",
      descricao: "",
      imagem: "/certificados/",
      categoria: "Udemy",
      cargaHoraria: "",
      data: "",
    });
  }

  function resetarLista() {
    const ok = confirm("Deseja voltar para os certificados iniciais?");
    if (ok) setLista(certificadosIniciais);
  }

  return (
    <main style={{ minHeight: "100vh", background: "#05070c", color: "#e5e7eb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 18px 72px" }}>
        {/* topo */}
        <header style={{ textAlign: "center" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(30px, 4vw, 48px)",
              fontWeight: 950,
              letterSpacing: "-0.03em",
              color: "#22d3ee", // azul/teal
              textShadow: "0 0 24px rgba(34,211,238,0.25)",
            }}
          >
            Meus Certificados
          </h1>

          <p style={{ margin: "10px 0 0", color: "#94a3b8", fontSize: 15 }}>
            Portfólio de cursos e formações concluídas
          </p>

          <div
            style={{
              height: 1,
              maxWidth: 980,
              margin: "24px auto 22px",
              background: "rgba(148,163,184,0.18)",
            }}
          />

          {/* Barra topo */}
          <div
            style={{
              display: "grid",
              gap: 12,
              maxWidth: 920,
              margin: "0 auto 30px",
              gridTemplateColumns: "1fr",
            }}
            className="filters"
          >
            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar certificado (ex: Mikrotik, Cisco, Redes...)"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 14,
                border: "1px solid rgba(148,163,184,.25)",
                outline: "none",
                fontWeight: 800,
                color: "#e5e7eb",
                background: "rgba(2,6,23,.55)",
              }}
            />

            {/* ações */}
            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* filtros */}
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

              {/* botão adicionar */}
              <button
                onClick={() => setOpenAdd(true)}
                style={{
                  padding: "10px 14px",
                  borderRadius: 12,
                  border: "none",
                  fontWeight: 950,
                  cursor: "pointer",
                  background: "linear-gradient(90deg,#22d3ee,#3b82f6)",
                  color: "#041018",
                  boxShadow: "0 12px 30px rgba(34,211,238,.16)",
                }}
              >
                + Adicionar Certificado
              </button>

              {/* reset */}
              <button
                onClick={resetarLista}
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: "1px solid rgba(148,163,184,.25)",
                  fontWeight: 900,
                  cursor: "pointer",
                  background: "rgba(2,6,23,.55)",
                  color: "#e5e7eb",
                }}
              >
                Restaurar padrão
              </button>
            </div>
          </div>
        </header>

        {/* grid */}
        <section
          style={{
            display: "grid",
            gap: 22,
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
          }}
          className="certificados-grid"
        >
          {listaFiltrada.map((c) => (
            <article
              key={c.id}
              style={{
                background: "rgba(2,6,23,.65)",
                border: "1px solid rgba(148,163,184,0.20)",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 14px 30px rgba(0, 0, 0, 0.35)",
                transition: "transform .18s ease, box-shadow .18s ease",
              }}
              className="certificados-card"
            >
              {/* imagem */}
              <button
                onClick={() => setSelecionado(c)}
                style={{
                  cursor: "pointer",
                  display: "block",
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  width: "100%",
                }}
                aria-label={`Abrir certificado: ${c.titulo}`}
              >
                <div
                  style={{
                    borderBottom: "1px solid rgba(148,163,184,0.18)",
                    background: "rgba(2,6,23,.80)",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                    <Image
                      src={c.imagem}
                      alt={`Certificado: ${c.titulo}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 650px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </button>

              {/* conteúdo */}
              <div style={{ padding: "16px 16px 18px" }}>
                {/* badges */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 950,
                      padding: "6px 10px",
                      borderRadius: 999,
                      border: "1px solid rgba(148,163,184,.22)",
                      background: "rgba(2,6,23,.55)",
                      color: "#e5e7eb",
                    }}
                  >
                    {c.categoria}
                  </span>

                  {c.cargaHoraria && (
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 950,
                        padding: "6px 10px",
                        borderRadius: 999,
                        border: "1px solid rgba(34,211,238,.25)",
                        background: "rgba(34,211,238,.10)",
                        color: "#22d3ee",
                      }}
                    >
                      {c.cargaHoraria}
                    </span>
                  )}

                  {c.data && (
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 900,
                        padding: "6px 10px",
                        borderRadius: 999,
                        border: "1px solid rgba(148,163,184,.22)",
                        background: "rgba(2,6,23,.55)",
                        color: "#94a3b8",
                      }}
                    >
                      {c.data}
                    </span>
                  )}
                </div>

                <h3 style={{ margin: "0 0 8px", fontWeight: 950, fontSize: 18, color: "#e5e7eb" }}>
                  {c.titulo}
                </h3>

                <p style={{ margin: 0, color: "#94a3b8", fontSize: 14, lineHeight: 1.5 }}>
                  {c.descricao}
                </p>

                {/* ações */}
                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button
                    onClick={() => setSelecionado(c)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 12,
                      border: "none",
                      fontWeight: 950,
                      fontSize: 14,
                      color: "#041018",
                      background: "linear-gradient(90deg,#22d3ee,#3b82f6)",
                      cursor: "pointer",
                    }}
                  >
                    Visualizar
                  </button>

                  <a
                    href={c.imagem}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 12,
                      textDecoration: "none",
                      fontWeight: 900,
                      fontSize: 14,
                      color: "#e5e7eb",
                      border: "1px solid rgba(148,163,184,.25)",
                      background: "rgba(2,6,23,.55)",
                    }}
                  >
                    Abrir em nova guia
                  </a>

                  <a
                    href={c.imagem}
                    download
                    style={{
                      padding: "10px 12px",
                      borderRadius: 12,
                      textDecoration: "none",
                      fontWeight: 900,
                      fontSize: 14,
                      color: "#e5e7eb",
                      border: "1px solid rgba(148,163,184,.25)",
                      background: "rgba(2,6,23,.55)",
                    }}
                  >
                    Baixar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* vazio */}
        {listaFiltrada.length === 0 && (
          <div style={{ textAlign: "center", padding: "50px 10px", color: "#94a3b8" }}>
            Nenhum certificado encontrado.
          </div>
        )}
      </div>

      {/* MODAL VISUALIZAÇÃO */}
      {selecionado && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelecionado(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.75)",
            display: "grid",
            placeItems: "center",
            padding: 18,
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1100px, 100%)",
              background: "#0b1220",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 28px 80px rgba(0,0,0,.50)",
              border: "1px solid rgba(148,163,184,0.18)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "14px 14px",
                borderBottom: "1px solid rgba(148,163,184,.18)",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 950,
                    fontSize: 16,
                    color: "#e5e7eb",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {selecionado.titulo}
                </div>
                <div style={{ color: "#94a3b8", fontSize: 13 }}>{selecionado.descricao}</div>
              </div>

              <button
                onClick={() => setSelecionado(null)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: "none",
                  fontWeight: 950,
                  cursor: "pointer",
                  color: "#041018",
                  background: "linear-gradient(90deg,#22d3ee,#3b82f6)",
                }}
              >
                Fechar (ESC)
              </button>
            </div>

            <div style={{ background: "#000" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                <Image
                  src={selecionado.imagem}
                  alt={`Certificado: ${selecionado.titulo}`}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ADICIONAR */}
      {openAdd && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenAdd(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.75)",
            display: "grid",
            placeItems: "center",
            padding: 18,
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(720px, 100%)",
              background: "#0b1220",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 28px 80px rgba(0,0,0,.50)",
              border: "1px solid rgba(148,163,184,0.18)",
            }}
          >
            <div style={{ padding: 16, borderBottom: "1px solid rgba(148,163,184,.18)" }}>
              <div style={{ fontWeight: 950, fontSize: 18, color: "#22d3ee" }}>
                Adicionar novo certificado
              </div>
              <div style={{ color: "#94a3b8", fontSize: 13, marginTop: 4 }}>
                Dica: a imagem deve estar em <b>/public/certificados/</b>
              </div>
            </div>

            <div style={{ padding: 16, display: "grid", gap: 12 }}>
              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 900, color: "#e5e7eb", fontSize: 13 }}>Título</span>
                <input
                  value={novo.titulo}
                  onChange={(e) => setNovo((p) => ({ ...p, titulo: e.target.value }))}
                  style={inputDark}
                  placeholder="Ex: CCNA, Docker, Linux..."
                />
              </label>

              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 900, color: "#e5e7eb", fontSize: 13 }}>Descrição</span>
                <input
                  value={novo.descricao}
                  onChange={(e) => setNovo((p) => ({ ...p, descricao: e.target.value }))}
                  style={inputDark}
                  placeholder="Ex: Udemy • Certificado de conclusão"
                />
              </label>

              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 900, color: "#e5e7eb", fontSize: 13 }}>Imagem (caminho)</span>
                <input
                  value={novo.imagem}
                  onChange={(e) => setNovo((p) => ({ ...p, imagem: e.target.value }))}
                  style={inputDark}
                  placeholder="/certificados/meu-certificado.jpg"
                />
              </label>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontWeight: 900, color: "#e5e7eb", fontSize: 13 }}>Categoria</span>
                  <select
                    value={novo.categoria}
                    onChange={(e) => setNovo((p) => ({ ...p, categoria: e.target.value as Categoria }))}
                    style={inputDark}
                  >
                    <option value="Cisco">Cisco</option>
                    <option value="Udemy">Udemy</option>
                    <option value="SENAI">SENAI</option>
                    <option value="Hackone">Hackone</option>
                  </select>
                </label>

                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontWeight: 900, color: "#e5e7eb", fontSize: 13 }}>Carga horária</span>
                  <input
                    value={novo.cargaHoraria}
                    onChange={(e) => setNovo((p) => ({ ...p, cargaHoraria: e.target.value }))}
                    style={inputDark}
                    placeholder="Ex: 28h"
                  />
                </label>
              </div>

              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontWeight: 900, color: "#e5e7eb", fontSize: 13 }}>Data</span>
                <input
                  value={novo.data}
                  onChange={(e) => setNovo((p) => ({ ...p, data: e.target.value }))}
                  style={inputDark}
                  placeholder="Ex: 09/01/2026"
                />
              </label>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 10,
                padding: 16,
                borderTop: "1px solid rgba(148,163,184,.18)",
              }}
            >
              <button
                onClick={() => setOpenAdd(false)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: "1px solid rgba(148,163,184,.25)",
                  background: "rgba(2,6,23,.55)",
                  color: "#e5e7eb",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Cancelar
              </button>

              <button
                onClick={adicionarCertificado}
                style={{
                  padding: "10px 14px",
                  borderRadius: 12,
                  border: "none",
                  fontWeight: 950,
                  cursor: "pointer",
                  background: "linear-gradient(90deg,#22d3ee,#3b82f6)",
                  color: "#041018",
                }}
              >
                Salvar certificado
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS responsivo */}
      <style jsx global>{`
        @media (min-width: 650px) {
          .certificados-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .filters {
            grid-template-columns: 1.2fr 1fr !important;
            align-items: center;
          }
        }

        @media (min-width: 980px) {
          .certificados-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        .certificados-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
          border-color: rgba(34, 211, 238, 0.35);
        }
      `}</style>
    </main>
  );
}

const inputDark: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid rgba(148,163,184,.25)",
  outline: "none",
  fontWeight: 800,
  color: "#e5e7eb",
  background: "rgba(2,6,23,.55)",
};
