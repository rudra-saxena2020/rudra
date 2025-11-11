
import React from 'react';

const skills = [
  "React", "Node.js", "TypeScript", "Next.js", "Python", "Go",
  "Docker", "Kubernetes", "AWS", "Google Cloud", "GraphQL", "PostgreSQL", 
  "MongoDB", "Redis", "Tailwind CSS", "Figma", "Three.js", "GenAI"
];

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
  <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-5 py-2 mx-4 whitespace-nowrap backdrop-blur-sm">
    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3 animate-pulse"></div>
    <span className="font-medium text-gray-300 tracking-wide">{skill}</span>
  </div>
);

const SkillsMarquee: React.FC = () => {
  const extendedSkills = [...skills, ...skills]; // Duplicate for seamless loop

  return (
    <div className="py-16">
       <h3 className="text-center text-gray-500 font-semibold tracking-widest uppercase mb-8">Technologies I Work With</h3>
      <div className="relative w-full overflow-hidden mask-gradient">
        <div className="flex animate-marquee">
          {extendedSkills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
      <style>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillsMarquee;