'use client';

import React, { useEffect, useState } from 'react';
import ProfileImage from '../components/ProfileImage';
import Link from 'next/link';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className="container">
      {/* 1. SEÇÃO HERO - FOTO E TEXTO ALINHADOS PERFEITAMENTE */}
      <section className="hero-section">
        <div className="profile-wrapper">
          <div className="profile-circle">
            <ProfileImage />
          </div>
        </div>

        <div className="text-container">
          <h1 className="hero-title">Edson Iago Flores</h1>
          <h2 className="hero-subtitle">
            Especialista em TI & Desenvolvedor Full-Stack
          </h2>
          <span className="training-tag">(em formação)</span>
          <p className="hero-description">
            Unindo a experiência estratégica em <strong>Infraestrutura de TI</strong> com o poder do desenvolvimento moderno <strong>MERN Stack</strong> para criar soluções robustas e seguras.
          </p>
        </div>
      </section>

      {/* 2. BARRA DE TECNOLOGIAS */}
      <section className="tech-section">
        <div className="line"></div>
        <p className="label">EXPERTISE PRINCIPAL</p>
        <div className="badges">
          <span className="tag">⚛️ React</span>
          <span className="tag">🟢 Node.js</span>
          <span className="tag">🍃 MongoDB</span>
          <span className="tag">🖥️ Infra/SLA</span>
        </div>
      </section>

      {/* 3. BOTÕES DE AÇÃO */}
      <section className="actions">
        <Link href="/resumo" className="btn-primary">
          <span className="icon">📄</span> Ver Currículo
        </Link>
        <Link href="/contato" className="btn-secondary">
          <span className="icon">💬</span> Fale Comigo
        </Link>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 20px;
          color: #fff;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* AJUSTE DO HERO PARA LADO A LADO PERFEITO */
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 80px;
          margin-bottom: 100px;
        }

        /* CIRCULO DA FOTO AUMENTADO E CENTRALIZADO */
        .profile-wrapper {
          flex-shrink: 0;
        }

        .profile-circle {
          width: 320px; /* Tamanho aumentado para destaque */
          height: 320px;
          border-radius: 50%;
          border: 6px solid #00d1ff; /* Borda mais grossa como na imagem */
          box-shadow: 0 0 30px rgba(0, 209, 255, 0.4);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a1a1a;
        }

        /* TEXTO ALINHADO */
        .text-container {
          max-width: 600px;
          text-align: left;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: #00d1ff;
          margin: 15px 0 5px 0;
          font-weight: 700;
        }

        .training-tag {
          font-size: 1.2rem;
          color: #888;
          font-style: italic;
          display: block;
          margin-bottom: 25px;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #cccccc;
          line-height: 1.7;
        }

        /* DIVISOR */
        .tech-section { width: 100%; text-align: center; margin-bottom: 80px; }
        .line { 
          height: 1px; 
          background: linear-gradient(90deg, transparent, #333, transparent); 
          margin-bottom: 40px; 
        }
        .label { 
          font-size: 0.9rem; 
          letter-spacing: 5px; 
          color: #666; 
          text-transform: uppercase;
          font-weight: 800; 
          margin-bottom: 30px; 
        }

        /* BADGES */
        .badges { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .tag { 
          background: #111; 
          padding: 14px 28px; 
          border-radius: 50px; /* Estilo pílula como na imagem */
          border: 1px solid #333; 
          font-weight: 600;
          transition: 0.3s;
        }
        .tag:hover { border-color: #00d1ff; background: #161616; }

        /* BOTÕES */
        .actions { display: flex; gap: 30px; justify-content: center; margin-top: 20px; }
        
        .btn-primary { 
          background: #00d1ff; color: #000; padding: 22px 50px; border-radius: 16px; 
          font-weight: 800; text-decoration: none; font-size: 1.3rem;
          box-shadow: 0 10px 30px rgba(0, 209, 255, 0.3); transition: 0.3s ease;
          display: flex; align-items: center; gap: 12px;
        }

        .btn-secondary { 
          background: rgba(255,255,255,0.03); color: #fff; padding: 22px 50px; border-radius: 16px;
          font-weight: 700; text-decoration: none; font-size: 1.3rem;
          border: 1px solid rgba(255,255,255,0.1); transition: 0.3s ease;
          display: flex; align-items: center; gap: 12px;
          backdrop-filter: blur(10px);
        }

        .btn-primary:hover { transform: translateY(-5px); filter: brightness(1.1); }
        .btn-secondary:hover { transform: translateY(-5px); background: rgba(255,255,255,0.08); }

        /* RESPONSIVIDADE */
        @media (max-width: 1024px) {
          .hero-section { flex-direction: column; text-align: center; gap: 40px; }
          .text-container { text-align: center; }
          .hero-title { font-size: 3rem; }
          .profile-circle { width: 260px; height: 260px; }
        }

        @media (max-width: 600px) {
          .actions { flex-direction: column; width: 100%; }
          .btn-primary, .btn-secondary { justify-content: center; }
        }
      `}} />
    </main>
  );
}