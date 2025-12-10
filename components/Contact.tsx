import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert("Thanks for reaching out! This is a demo form.");
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-30 pointer-events-none">
                <div className="absolute bottom-0 w-full h-1/2 bg-blue-600/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-3">Get in Touch</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Let's Scale Your <br />
                            Business Together.
                        </h3>
                        <p className="text-lg text-slate-400 mb-8">
                            Whether you're an advertiser looking for traffic or a network looking for top-tier publishers, I'm ready to discuss how we can partner up.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                    <Mail className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email Me</p>
                                    <p className="text-white font-medium">contact@kundankishor.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                    <Phone className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Call Me</p>
                                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="text-white font-medium">Remote / Global</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    required
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                    placeholder="John Doe"
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    required
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                    placeholder="john@example.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea 
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                    placeholder="Tell me about your project..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;