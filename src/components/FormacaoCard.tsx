'use client'; 
// Use 'use client' porque este componente usa useState (interatividade)
import React, { useState } from 'react';
import { FormacaoItem } from '../data/ResumoFormacaoData'; // Importa a interface

interface FormacaoCardProps {
    item: FormacaoItem;
}

const FormacaoCard: React.FC<FormacaoCardProps> = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            {/* O CARD CLICÁVEL (Item da Lista) */}
            <div 
                className={`formacao-card ${item.tipo === 'ACADEMICO' ? 'card-academico' : 'card-certificacao'}`}
                onClick={handleOpenModal}
            >
                <h4>{item.titulo}</h4>
                <p><strong>Instituição:</strong> {item.instituicao}</p>
                <p><strong>Ano/Período:</strong> {item.ano}</p>
                <span className="card-click-info">Clique para detalhes →</span>
            </div>

            {/* O MODAL (Janela Pop-up com os Detalhes) */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        
                        <button className="modal-close-btn" onClick={handleCloseModal}>&times;</button>
                        
                        <h2>{item.titulo}</h2>
                        <p className="modal-instituicao">**{item.instituicao}** ({item.ano})</p>
                        
                        <div className="modal-section">
                            <h3>O que foi estudado:</h3>
                            <ul>
                                {item.detalhes.map((det, index) => (
                                    <li key={index}>— {det}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="modal-section">
                            <h3>Competências Chave:</h3>
                            <div className="competencias-list">
                                {item.competencias.map((comp, index) => (
                                    <span key={index} className="competencia-tag">{comp}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default FormacaoCard;