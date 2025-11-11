
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Wand2, Loader2 } from 'lucide-react';
import { generateProfessionalMessage } from '../services/geminiService';

const ContactInfoCard: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 flex items-center space-x-4">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="text-gray-400">{content}</p>
        </div>
    </div>
);


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [generateError, setGenerateError] = useState('');
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleGenerateMessage = async () => {
        if (!formData.message.trim()) {
            setGenerateError('Please write a message first to get an AI draft.');
            return;
        }
        setIsGenerating(true);
        setGenerateError('');
        try {
            const professionalMessage = await generateProfessionalMessage(formData.message);
            setFormData(prev => ({ ...prev, message: professionalMessage }));
        } catch (err) {
            setGenerateError('Failed to generate message. Please try again.');
            console.error(err);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus('idle');
        
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setSubmitStatus('error');
            return;
        }
        
        setIsSubmitting(true);
        // Simulate API call to a backend
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Form Submitted:', formData);
        
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setSubmitStatus('idle'), 5000);
    };
    
    return (
        <section id="contact" className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4">Get In Touch</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Let's discuss your project and how I can help you.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 space-y-6 mb-12">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" required />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" required />
                    </div>
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all" required />
                    <div className="relative">
                        <textarea 
                            name="message"
                            placeholder="Your Message" 
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                            required
                        ></textarea>
                         <button 
                            type="button"
                            onClick={handleGenerateMessage}
                            disabled={isGenerating}
                            className="absolute bottom-3 right-3 bg-gray-700/80 text-gray-300 px-3 py-1.5 rounded-md text-xs flex items-center hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                         >
                             {isGenerating ? (
                                <>
                                    <Loader2 size={14} className="animate-spin mr-1.5" />
                                    Generating...
                                </>
                             ) : (
                                <>
                                    <Wand2 size={14} className="mr-1.5 text-purple-400" />
                                    AI Draft
                                </>
                             )}
                         </button>
                    </div>
                    {generateError && <p className="text-red-400 text-sm">{generateError}</p>}
                    <div className="text-center pt-2">
                        <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-10 rounded-full hover:scale-105 transition-transform duration-300 w-48 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed">
                            {isSubmitting ? <Loader2 size={24} className="animate-spin" /> : 'Send Message'}
                        </button>
                    </div>
                    {submitStatus === 'success' && <p className="text-green-400 text-center mt-4">Message sent successfully! I'll be in touch soon.</p>}
                    {submitStatus === 'error' && <p className="text-red-400 text-center mt-4">Please fill out all the required fields.</p>}
                </form>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ContactInfoCard icon={<Mail />} title="Email" content="rudra@example.com" />
                    <ContactInfoCard icon={<Phone />} title="Phone" content="+91 123 456 7890" />
                    <ContactInfoCard icon={<MapPin />} title="Location" content="Meerut, India" />
                </div>
            </div>
        </section>
    );
};

export default Contact;
