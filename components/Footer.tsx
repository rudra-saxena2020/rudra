
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-gray-800 py-12">
            <div className="container mx-auto px-6 md:px-10 lg:px-20 text-center text-gray-400">
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold text-white mb-6 inline-block">
                    <span className="text-cyan-400">RU</span>DRA <span className="text-pink-500">SAX</span>ENA
                </a>
                <div className="flex justify-center space-x-6 md:space-x-8 mb-8">
                    <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-cyan-400 transition-colors">About</a>
                    <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="hover:text-cyan-400 transition-colors">Projects</a>
                    <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-cyan-400 transition-colors">Services</a>
                    <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-cyan-400 transition-colors">Contact</a>
                </div>
                <div className="flex justify-center space-x-5 mb-8">
                    <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github /></a>
                    <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin /></a>
                    <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
                    <a href="https://www.instagram.com/example/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Rudra Saxena. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
