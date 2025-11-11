
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A001F] text-gray-200 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/40 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-20%] left-[20%] w-[400px] h-[400px] bg-pink-900/40 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-10 lg:px-20">
          <Hero />
          <SkillsMarquee />
          <About />
          <FeaturedProjects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
       <style>{`
        @keyframes blob {
	        0% { transform: translate(0px, 0px) scale(1); }
	        33% { transform: translate(30px, -50px) scale(1.1); }
	        66% { transform: translate(-20px, 20px) scale(0.9); }
	        100% { transform: translate(0px, 0px) scale(1); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-blob { animation: blob 7s infinite; }
      `}</style>
    </div>
  );
};

export default App;
