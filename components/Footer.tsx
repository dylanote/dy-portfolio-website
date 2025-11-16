import React from 'react';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = ({ href, children, 'aria-label': ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group p-2 flex items-center justify-center"
    aria-label={ariaLabel}
  >
    <span className="absolute inset-0 w-full h-full bg-white/20 rounded-full transform scale-0 group-hover:scale-125 transition-transform duration-300 ease-out"></span>
    <div className="relative z-10 text-white">
      {children}
    </div>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 md:p-6 pointer-events-auto">
      <div className="flex justify-between items-center">
        <p className="text-xs md:text-sm text-white/80">
          Todos los derechos reservados © 2025 Dylan Martín a.k.a. Dy a.k.a. Dylanote.
        </p>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SocialIcon href="https://instagram.com" aria-label="Instagram">
            <InstagramIcon className="w-5 h-5 md:w-6 md:h-6" />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com" aria-label="LinkedIn">
            <LinkedInIcon className="w-5 h-5 md:w-6 md:h-6" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;