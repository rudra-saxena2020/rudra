
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ category, title, description, tags, imageUrl, projectUrl }) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-900/30 hover:-translate-y-2">
      <div className="overflow-hidden h-56 relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold text-purple-400 bg-purple-900/30 inline-block px-3 py-1 rounded-full mb-3">{category}</p>
        <h3 className="text-2xl font-bold mb-3 text-gray-100">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed h-20">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map(tag => (
            <span key={tag} className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-400 inline-flex items-center group-hover:text-pink-500 transition-colors">
          View Project <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const projects = [
    {
        category: "E-COMMERCE",
        title: "Nexus Store",
        description: "A full-featured e-commerce platform with real-time inventory management, secure Stripe payments, and an intuitive admin dashboard.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        projectUrl: "https://github.com/example/ecommerce-platform"
    },
    {
        category: "SAAS",
        title: "Scribe AI",
        description: "An AI-powered content generation tool that helps marketers create engaging blog posts and copy using advanced Gemini models.",
        tags: ["Next.js", "Gemini AI", "TypeScript", "Tailwind"],
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        projectUrl: "https://github.com/example/ai-content-generator"
    },
    {
        category: "DATA VISUALIZATION",
        title: "Insightify",
        description: "A comprehensive analytics dashboard with real-time data visualization and customizable reporting features for businesses.",
        tags: ["React", "D3.js", "Firebase", "Material-UI"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        projectUrl: "https://github.com/example/analytics-dashboard"
    }
];

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-16 will-animate">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">A selection of projects that showcase my passion for creating impactful digital solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`will-animate delay-${(index + 1) * 100}`}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;