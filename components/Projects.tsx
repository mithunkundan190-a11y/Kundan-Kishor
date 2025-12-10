import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "FinTech App Launch",
      category: "Finance",
      image: "https://picsum.photos/id/445/800/600",
      stats: "+240% ROI",
      description: "Scaled user acquisition for a new neo-bank app using influencer marketing and native ads."
    },
    {
      title: "Eco-Ecomm Scale",
      category: "E-Commerce",
      image: "https://picsum.photos/id/201/800/600",
      stats: "$45k Revenue/Mo",
      description: "Managed full-funnel affiliate strategy for a sustainable clothing brand."
    },
    {
      title: "SaaS B2B Lead Gen",
      category: "Software",
      image: "https://picsum.photos/id/3/800/600",
      stats: "1.2k Leads",
      description: "Generated high-quality qualified leads for an enterprise project management tool."
    },
    {
      title: "Health & Wellness",
      category: "Nutra",
      image: "https://picsum.photos/id/1060/800/600",
      stats: "12% Conv. Rate",
      description: "Optimized landing pages and email sequences for a premium supplement brand."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-xl">
             <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-3">Case Studies</h2>
             <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                Proven Results in <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Competitive Niches
                </span>
             </h3>
           </div>
           <a href="#" className="hidden md:flex items-center text-slate-400 hover:text-white transition-colors mt-4 md:mt-0">
             View all campaigns <ArrowUpRight className="ml-2 w-4 h-4" />
           </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300">
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700">
                  <span className="text-xs font-bold text-cyan-400">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                    <p className="text-slate-400 text-sm mt-2">{project.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Result</span>
                    <p className="text-lg font-bold text-green-400">{project.stats}</p>
                  </div>
                  <button className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 hover:text-white text-slate-400 transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="#" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
             View all campaigns <ArrowUpRight className="ml-2 w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;