import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className="profile-image-container">
      <Image 
        src="/foto-perfil.jpg" // Certifique-se que o nome do arquivo na pasta public está igual
        alt="Edson Flores"
        width={180}
        height={180}
        priority
      />
    </div>
  );
};

export default ProfileImage;