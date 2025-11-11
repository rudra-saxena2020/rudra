
import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full text-gray-300 hover:text-cyan-400 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] backdrop-blur-sm transition-all duration-300 transform hover:scale-110">
    {children}
  </a>
);

const Hero: React.FC = () => {
    const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="home" className="py-32 md:py-48 text-center min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="inline-block bg-white/5 text-sm py-2 px-4 rounded-full border border-white/10 mb-6 will-animate">
          🚀 Welcome to My Digital Playground
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 will-animate delay-100 relative">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-shimmer">Rudra</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Saxena</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-cyan-400 font-bold mb-6 will-animate delay-200">
          Full Stack Developer & AI Enthusiast
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-8 text-lg will-animate delay-300">
          I design and build exceptional digital experiences, blending cutting-edge technology with user-centric design to create web applications that are not just functional, but memorable.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-10 will-animate delay-400">
          <button onClick={handleScrollToProjects} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)] transition-all duration-300">
            View My Work
          </button>
          <a href="/Rudra_Saxena_CV.pdf" download="Rudra_Saxena_CV.pdf" className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-full hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 inline-block">
            Download CV
          </a>
        </div>
        <div className="flex space-x-5 will-animate delay-500">
          <SocialIcon href="https://github.com/example"><Github /></SocialIcon>
          <SocialIcon href="https://linkedin.com/in/example"><Linkedin /></SocialIcon>
          <SocialIcon href="https://twitter.com/example"><Twitter /></SocialIcon>
          <SocialIcon href="https://www.instagram.com/example/"><Instagram /></SocialIcon>
        </div>
      </div>
    </section>
  );
};

export default Hero;