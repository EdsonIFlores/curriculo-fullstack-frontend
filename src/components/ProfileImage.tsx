import React from 'react';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
    return (
        <div style={{
            // Contêiner principal para o círculo e o alinhamento
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-color)', // Seu círculo azul
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            margin: '0 auto 20px',
            boxShadow: '0 0 20px rgba(0, 150, 255, 0.5)' 
        }}>
            {/* 🟢 CAMINHO CORRIGIDO: Deve ser apenas o nome do arquivo se ele estiver na raiz de /public */}
            <Image
                src="/foto-perfil.jpg" // ⬅️ AQUI ESTÁ A CORREÇÃO!
                alt="Foto de Perfil de Edson Flores"
                width={170} // Tamanho da imagem
                height={170} 
                priority
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--bg-primary)'
                }}
            />
        </div>
    );
};

export default ProfileImage;