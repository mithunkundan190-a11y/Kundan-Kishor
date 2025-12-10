import React from 'react';
import { Target, BarChart2, Share2, Search, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <BarChart2 className="w-6 h-6 text-cyan-400" />,
      title: "Performance Analytics",
      description: "Deep dive into data to optimize campaigns for maximum ROI and conversion rates."
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Funnel Optimization",
      description: "Crafting high-converting landing pages and user journeys that turn clicks into customers."
    },
    {
      icon: <Share2 className="w-6 h-6 text-blue-400" />,
      title: "Partnership Mgmt",
      description: "Building strong relationships with top-tier networks and advertisers globally."
    },
    {
      icon: <Search className="w-6 h-6 text-pink-400" />,
      title: "SEO Strategy",
      description: "Organic growth tactics to drive sustainable, high-quality traffic to affiliate offers."
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: "Global Markets",
      description: "Experience running campaigns across North America, Europe, and APAC regions."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Media Buying",
      description: "Strategic paid traffic acquisition across social, native, and display networks."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-3">Expertise</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                    Mastering the Art of <br />
                    <span className="text-slate-400">Digital Affiliation</span>
                </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="group bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            {skill.icon}
                        </div>
                        <div className="bg-slate-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-cyan-500/30">
                            {skill.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {skill.title}
                        </h4>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-20 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-white/10">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">Ready to scale your product?</h4>
                    <p className="text-slate-400">Let's discuss how we can drive qualified traffic to your offer.</p>
                </div>
                <a href="#contact" className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-cyan-50 transition-colors">
                    Get in Touch
                </a>
            </div>
        </div>
    </section>
  );
};

export default About;