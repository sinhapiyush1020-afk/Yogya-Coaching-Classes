import { KEY_FEATURES, METHODOLOGY_STEPS } from '../types';
import * as LucideIcons from 'lucide-react';

interface WhyProps {
  onOpenTrialModal: () => void;
}

export default function WhyChooseUs({ onOpenTrialModal }: WhyProps) {
  
  // Dynamic component resolve helper for Lucide React icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-indigo-300" />;
    }
    return <LucideIcons.BookOpen className="w-6 h-6 text-indigo-300" />;
  };

  return (
    <section id="why-us" className="py-20 relative overflow-hidden">
      {/* Visual background noise blur */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest bg-white/5 text-indigo-350 px-3 py-1 rounded-md inline-block border border-white/10">
            Our Key Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Why Yogya is the Ultimate Choice for Kanpur's Ambitious Students & Parents
          </h2>
          <p className="text-sm sm:text-base text-slate-350">
            We provide structured discipline, academic motivation, and personalized focus. Our values are geared toward converting academic doubts into outstanding academic results.
          </p>
        </div>

        {/* Feature Grid representing the 9 requirements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {KEY_FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="group p-6 glass rounded-2xl hover:bg-white/5 flex flex-col justify-between hover:scale-[1.01] hover:border-white/12 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rounded Icon badge wrapper */}
                <div className="w-12 h-12 bg-indigo-500/10 group-hover:bg-indigo-500/20 rounded-xl flex items-center justify-center transition-colors border border-indigo-500/20">
                  {renderIcon(feat.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>

              {/* Little detail badge */}
              <div className="pt-4 mt-4 border-t border-white/5 text-right">
                <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest bg-indigo-500/15 p-1 px-2 rounded-md">
                  Active Feature
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology Flow Section */}
        <div id="methodology" className="glass rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle graphic effects */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-805/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-805/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 relative z-10">
            <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-indigo-305 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/60">
              Our 4-Step Pedagogic Formula
            </span>
            <h3 className="text-2xl sm:text-3.5xl font-extrabold tracking-tight leading-none">
              The Teaching Methodology That Powers Academic Toppers
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              We do not believe in plain unguided rote-memorization. Our structured cyclic process transforms classroom knowledge into flawless weekend exam answers.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {METHODOLOGY_STEPS.map((m, index) => (
              <div key={index} className="relative p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-colors">
                
                {/* Step indicator tag */}
                <div className="text-3xl font-black font-mono bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent leading-none">
                  {m.step}
                </div>
                
                <h4 className="text-base font-extrabold mt-3 text-white leading-snug">
                  {m.title}
                </h4>
                
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {m.desc}
                </p>

                {/* Micro connecting arrows for layout decoration */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/10 z-20">
                    <span className="text-xl font-bold font-mono">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick CTA inside dark block */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 pt-8 border-t border-white/10 relative z-10">
            <span className="text-xs sm:text-sm font-semibold text-slate-300 text-center sm:text-left">
              Want to experience this systematic pedagogy in person?
            </span>
            <button
              onClick={onOpenTrialModal}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer transition-all active:scale-95 whitespace-nowrap"
            >
              Request Free Admission Pass
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
