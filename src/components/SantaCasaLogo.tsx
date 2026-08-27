import React from 'react';

interface SantaCasaLogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'horizontal' | 'cover';
  alt?: string;
}

export const SantaCasaLogo: React.FC<SantaCasaLogoProps> = ({ 
  className = "h-12",
  variant = "full",
  alt = "Grupo Santa Casa BH"
}) => {
  const logoUrl = "https://santacasabh.org.br/wp-content/uploads/2023/05/logo-gscbh.png";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoUrl}
        alt={alt}
        referrerPolicy="no-referrer"
        className="h-full w-auto max-h-full object-contain shrink-0"
        loading="eager"
      />
    </div>
  );
};
