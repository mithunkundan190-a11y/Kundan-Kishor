import React from 'react';
import { ArrowRight, TrendingUp, DollarSign, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Available for new partnerships
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              Scale Your Brand with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                Precision Affiliate Marketing
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I help businesses unlock exponential growth through data-driven affiliate strategies, high-converting funnels, and strategic partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center group"
              >
                View Campaigns
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 border border-slate-700 text-white font-bold rounded-lg hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 flex items-center justify-center"
              >
                Book Consultation
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">50+</p>
                <p className="text-sm text-slate-400 uppercase tracking-wider">Brands</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">$2M+</p>
                <p className="text-sm text-slate-400 uppercase tracking-wider">Generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-1">300%</p>
                <p className="text-sm text-slate-400 uppercase tracking-wider">Avg ROI</p>
              </div>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="relative hidden lg:block">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 group">
              {/* Fake Dashboard UI */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-500 text-xs font-mono">dashboard.analytics.app</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                   <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="text-green-400 w-5 h-5" />
                      <span className="text-xs text-green-400 font-medium">+12.5%</span>
                   </div>
                   <div className="text-2xl font-bold text-white">24.5k</div>
                   <div className="text-xs text-slate-400">Monthly Clicks</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                   <div className="flex items-center justify-between mb-2">
                      <DollarSign className="text-cyan-400 w-5 h-5" />
                      <span className="text-xs text-cyan-400 font-medium">+8.2%</span>
                   </div>
                   <div className="text-2xl font-bold text-white">$12.4k</div>
                   <div className="text-xs text-slate-400">Revenue</div>
                </div>
              </div>

              <div className="h-48 bg-slate-800/30 rounded-lg border border-slate-700 flex items-end justify-between p-4 gap-2">
                 {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                    <div key={i} className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                 ))}
              </div>
            </div>

             {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                <div className="bg-green-500/20 p-3 rounded-full">
                    <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                    <p className="text-white font-bold">New Partner</p>
                    <p className="text-xs text-slate-400">Just joined network</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;