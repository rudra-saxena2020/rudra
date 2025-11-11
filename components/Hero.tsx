
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-gray-800/50 p-3 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-110">
    {children}
  </a>
);

const Hero: React.FC = () => {
    const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="home" className="py-32 md:py-48 text-center">
      <div className="flex flex-col items-center">
        <div className="inline-block bg-gray-800/50 text-sm py-2 px-4 rounded-full border border-gray-700 mb-6">
          🚀 Welcome to My Portfolio
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Rudra</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Saxena</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-cyan-400 font-bold mb-6">
          Full Stack Developer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8 text-lg">
          Crafting digital experiences with cutting-edge technologies. Specializing in building innovative web applications that make a difference.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
          <button onClick={handleScrollToProjects} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300">
            View My Work
          </button>
          {/* Note: Place your CV file in your project's public assets folder */}
          <a href="/Rudra_Saxena_CV.pdf" download="Rudra_Saxena_CV.pdf" className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300 inline-block">
            Download CV
          </a>
        </div>
        <div className="flex space-x-5">
          <SocialIcon href="https://github.com/yourusername"><Github /></SocialIcon>
          <SocialIcon href="https://linkedin.com/in/yourusername"><Linkedin /></SocialIcon>
          <SocialIcon href="https://twitter.com/yourusername"><Twitter /></SocialIcon>
          <SocialIcon href="https://www.instagram.com/yourusername/"><Instagram /></SocialIcon>
        </div>
      </div>
    </section>
  );
};

export default Hero;
