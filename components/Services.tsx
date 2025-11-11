
import React from 'react';
import { Palette, Code, Smartphone, DatabaseZap, Bot, GitBranch } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-full mb-6 inline-block">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

const services = [
    { icon: <Palette size={32} />, title: "UI/UX Design", description: "Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement." },
    { icon: <Code size={32} />, title: "Web Development", description: "Building responsive, fast, and scalable web applications using modern frameworks and best practices." },
    { icon: <Smartphone size={32} />, title: "Mobile Apps", description: "Developing cross-platform mobile applications that deliver native-like performance and user experience." },
    { icon: <DatabaseZap size={32} />, title: "API Development", description: "Designing and implementing robust RESTful APIs and microservices architecture for scalable solutions." },
    { icon: <Bot size={32} />, title: "AI Integration", description: "Integrating AI and machine learning capabilities to add intelligent features to your applications." },
    { icon: <GitBranch size={32} />, title: "DevOps & Deployment", description: "Setting up CI/CD pipelines, cloud infrastructure, and ensuring smooth deployment and monitoring." },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4">What I Offer</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive development services tailored to your needs.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
