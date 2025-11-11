
import React from 'react';

const skills = [
  "React", "Node.js", "TypeScript", "MongoDB", "Next.js", "Python",
  "Docker", "AWS", "GraphQL", "PostgreSQL", "Tailwind CSS", "Figma"
];

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
  <div className="flex items-center bg-gray-800/60 border border-gray-700 rounded-full px-5 py-2 mx-4 whitespace-nowrap">
    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
    <span className="font-medium text-gray-300">{skill}</span>
  </div>
);

const SkillsMarquee: React.FC = () => {
  const extendedSkills = [...skills, ...skills]; // Duplicate for seamless loop

  return (
    <div className="py-12">
      <div className="relative w-full overflow-hidden mask-gradient">
        <div className="flex animate-marquee">
          {extendedSkills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
      </div>
      <style>{`
        .mask-gradient {
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillsMarquee;
