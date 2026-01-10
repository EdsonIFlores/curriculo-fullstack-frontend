'use client';
import React from 'react';

const certificados = [
  {
    titulo: "Cybersecurity Essentials",
    instituicao: "Cisco Networking Academy",
    imagem: "/certificados/analista_de_rede.jpg",
    pdf: "/certificados/cybersecurity_essentials.pdf",
    resumo: "Táticas de criminosos virtuais e defesa de componentes de rede."
  },
  {
    titulo: "Bootcamp Mikrotik",
    instituicao: "Hackone - Analista de Redes",
    imagem: "/certificados/curso_mikrotik.jpg",
    pdf: "/certificados/bootecamp_mikrotik.pdf",
    resumo: "Configuração de LAN, VLAN, OSPF, BGP e segurança em MikroTik."
  },
  {
    titulo: "Arquitetura de Redes",
    instituicao: "Especialização Técnica",
    imagem: "/certificados/arquitetura_de_redes.jpg",
    pdf: null,
    resumo: "Design de topologias lógicas e infraestrutura de rede escalável."
  }
];

export default function CertificadosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-black uppercase tracking-tighter border-b-4 border-blue-600 inline-block pb-2">
            Certificações
          </h1>
        </header>

        {/* Grade com Tamanhos Padronizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificados.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-[#111] border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Container da Imagem com Altura Padronizada (AspectRatio 16:9 aprox) */}
              <div className="w-full h-56 overflow-hidden bg-gray-900 border-b border-gray-800">
                <img 
                  src={cert.imagem} 
                  alt={cert.titulo}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x225?text=Certificado+Indisponível";
                  }}
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {cert.instituicao}
                </p>
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {cert.titulo}
                </h2>
                <p className="text-sm text-gray-400 mb-6 flex-grow">
                  {cert.resumo}
                </p>

                {/* Botão de Download PDF */}
                {cert.pdf ? (
                  <a 
                    href={cert.pdf} 
                    download 
                    className="w-full bg-white text-black text-center py-3 rounded-lg font-black text-xs uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Descarregar PDF
                  </a>
                ) : (
                  <span className="w-full bg-gray-800 text-gray-500 text-center py-3 rounded-lg font-bold text-xs uppercase cursor-not-allowed">
                    Em Breve
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}