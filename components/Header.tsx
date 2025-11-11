
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg border-b border-gray-800' : 'py-2'}`}>
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex justify-between items-center py-4">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold">
          <span className="text-cyan-400">RU</span>DRA
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">{link.label}</a>
          ))}
        </nav>
        <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-5 rounded-full hover:scale-105 transition-transform duration-300">
          Let's Talk
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg">{link.label}</a>
            ))}
             <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-5 rounded-full hover:scale-105 transition-transform duration-300">
                Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
