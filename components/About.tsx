
import React from 'react';

const skills = ["React", "Node.js", "TypeScript", "MongoDB", "Next.js", "Express", "Python", "AWS", "Docker", "GenAI"];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-2xl shadow-purple-900/20 will-animate">
            <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-sm md:text-base flex">
                <code className="text-gray-500 pr-4 select-none text-right">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
                </code>
                <code className="text-gray-300">
                    <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = {'{\n'}
                    {'  '}<span className="text-red-400">name</span>: <span className="text-green-400">"Rudra Saxena"</span>,
                    {'\n'}
                    {'  '}<span className="text-red-400">passion</span>: <span className="text-green-400">"Building amazing things"</span>,
                    {'\n'}
                    {'  '}<span className="text-red-400">focus</span>: <span className="text-green-400">"Full Stack & AI"</span>,
                    {'\n'}
                    {'  '}<span className="text-red-400">skills</span>: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node"</span>, <span className="text-green-400">"AI"</span>, <span className="text-green-400">"..."</span>]
                    {'\n'}
                    {'};'}
                </code>
            </pre>
        </div>
        <div className="will-animate delay-200">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Turning Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Digital Reality</span></h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            As a passionate full-stack developer, I thrive on building scalable web applications from the ground up. With a strong foundation in modern technologies and a keen eye for user experience, I create digital solutions that are both functional and beautiful.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            My journey in tech is fueled by relentless curiosity and a commitment to continuous learning. I specialize in the MERN stack and I'm deeply fascinated by the potential of integrating AI into modern applications.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {skills.map(skill => (
              <span key={skill} className="bg-white/5 border border-white/10 text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full">{skill}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="will-animate delay-300">
              <p className="text-4xl font-bold text-cyan-400">50+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="will-animate delay-400">
              <p className="text-4xl font-bold text-cyan-400">30+</p>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="will-animate delay-500">
              <p className="text-4xl font-bold text-cyan-400">3+</p>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;