import React, { useState } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { handleCtaClick } from '../../utils/tracking';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Resultados', href: '#results' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Ciência', href: '#science' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-[#F7FBFF]/95 backdrop-blur-md py-4"
    >
      <div className="w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto flex items-center justify-between">
      {/* Animated Logo */}
      <div className="flex-shrink-0">
        <a
          href="/"
          className="block"
        >
          <img
            src="/Slima4.webp"
            alt="Slima"
            className="h-8 w-auto"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-navy-800/80 hover:text-navy-800 font-sans text-base font-medium transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Right Side Actions (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        <Button variant="premium" size="sm" onClick={handleCtaClick}>Faça o quiz</Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-navy-800"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F7FBFF] shadow-xl p-6 flex flex-col gap-4 lg:hidden rounded-b-xl border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-navy-800 font-medium py-2 hover:text-[#FFCB6C]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="premium" className="w-full justify-center" onClick={handleCtaClick}>Faça o quiz</Button>
        </div>
      )}
      </div>
    </header>
    </>
  );
};

export default Header;
