
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
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-900/20">
      <div className="overflow-hidden h-56">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold text-purple-400 bg-purple-900/30 inline-block px-3 py-1 rounded-full mb-3">{category}</p>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map(tag => (
            <span key={tag} className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
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
        category: "WEB APP",
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and admin dashboard.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: "https://picsum.photos/seed/ecom/600/400",
        projectUrl: "https://github.com/example/ecommerce-platform"
    },
    {
        category: "SAAS",
        title: "AI Content Generator",
        description: "An AI-powered content generation tool that helps marketers create engaging blog posts and copy using advanced NLP models.",
        tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
        imageUrl: "https://picsum.photos/seed/aicontent/600/400",
        projectUrl: "https://github.com/example/ai-content-generator"
    },
    {
        category: "DASHBOARD",
        title: "Analytics Dashboard",
        description: "A comprehensive analytics dashboard with real-time data visualization and customizable reporting features.",
        tags: ["React", "D3.js", "Firebase", "Material-UI"],
        imageUrl: "https://picsum.photos/seed/analytics/600/400",
        projectUrl: "https://github.com/example/analytics-dashboard"
    }
];

const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Showcasing my best work and creative solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
