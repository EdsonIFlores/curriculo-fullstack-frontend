'use client';

import React from 'react';

export default function ProfileImage() {
  return (
    <div className="img-wrapper">
      {/* O nome aqui deve ser EXATAMENTE igual ao da pasta public */}
      <img 
        src="/foto-perfil.jpg" 
        alt="Edson Iago Flores" 
        className="profile-img"
      />
      <style jsx>{`
        .img-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          background: #111;
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Preenche o círculo sem achatar */
          object-position: center;
          border-radius: 50%;
          display: block;
        }
      `}</style>
    </div>
  );
}