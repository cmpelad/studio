
"use client";
import { useContext } from 'react';
import { GlobalContext } from '@/components/AppInitializer';

export default function FloatingRegisterButton() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { openRegistrationModal } = context;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openRegistrationModal();
  };

  return (
    <a 
      href="#" 
      className="floating-register-btn registration-trigger" 
      title="להרשמה לקעמפ" 
      data-aos="zoom-in" 
      data-aos-anchor="body" 
      data-aos-once="true"
      onClick={handleClick}
    >
      <i className="fas fa-edit"></i>
      <span>להרשמה</span> {/* Text changes via CSS media query for desktop */}
    </a>
  );
}

    