import { ArrowRight, Phone, CheckCircle, Shield, Award, Sparkles, Star } from 'lucide-react';
import { INST_DETAILS } from '../types';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export default function Hero({ onOpenTrialModal }: HeroProps) {
  // Path to the beautiful generated image
  const heroImageSrc = '/src/assets/images/coaching_hero_banner_1782045332800.jpg';

  const quickPointers = [
    '5 Days Free Classes (Risk-Free)',
    'Separate Hindi & English Mediums',
    'Personal Performance Guidance',
    'Classes 1st to 12th (All Boards)',
  ];

  return (
    <section id="home" className="relative pt-[124px] sm:pt-[150px] pb-16 lg:pb-24 overflow-hidden">
      {/* Decorative vector meshes or glowing elements representing educational energy */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-550/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-550/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Col (6 Cols on large screens) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Kanpur Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-indigo-300 text-xs sm:text-sm font-bold border border-white/10 shadow-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Best Coaching Classes in Kanpur, India</span>
              <span className="hidden sm:inline border-l border-white/10 pl-2 text-indigo-400">UP Board • CBSE • ICSE</span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Build Your Future With{' '}
              <span className="block mt-1 text-gradient italic">
                Quality Education.
              </span>
            </h1>

            {/* Subheading describing classes */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to <span className="font-bold text-white">Yogya Coaching Classes</span>. We nurture potential into top-tier performance for <span className="text-indigo-400 font-bold">Classes 1st to 12th</span>. Equipped with standard-beating personal attention, weekly testing routines, and personalized study modules.
            </p>

            {/* Key Pointers with Checked Visuals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 pt-2">
              {quickPointers.map((pointer, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-450 flex-shrink-0" />
                  <span>{pointer}</span>
                </div>
              ))}
            </div>

            {/* Dynamic Board Indicators */}
            <div className="pt-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 block mb-2 text-center lg:text-left">
                Trusted Syllabus Coaching Under:
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {['UP Board (Hindi/English Medium)', 'CBSE (All subjects)', 'CISCE / ICSE Board'].map((board) => (
                  <span
                    key={board}
                    className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-bold rounded-lg border border-white/10 transition-all duration-200"
                  >
                    {board}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base rounded-xl shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                Join Free Trial Class
                <ArrowRight className="w-5 h-5 text-amber-305" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-extrabold text-base rounded-xl border border-white/10 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-indigo-400" />
                Contact Admissions
              </a>
            </div>

            {/* Trust Banner with Rating */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-400 pt-2 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
                <span className="font-bold text-white ml-1">4.9/5 Rating</span>
              </div>
              <span className="text-slate-650">•</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-indigo-455" /> 10+ Years Trust
              </span>
              <span className="text-slate-650">•</span>
              <span>1000+ Students Guided</span>
            </div>

          </div>

          {/* Image & Stats Visuals (5 Cols on large) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Border frame effects */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900 z-10 group">
              <img
                src={heroImageSrc}
                alt="Ambitious students learning together in Yogya Coaching Classes Kanpur"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Dim Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-80" />
              
              {/* Inline Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass p-3.5 rounded-xl">
                <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">New Batch Launch</p>
                <p className="text-sm font-semibold text-white">Enrolling now for Class 1st - 12th state rank preparation.</p>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-3xl rotate-12 -z-0 hidden sm:block pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full -z-0 hidden sm:block pointer-events-none" />

            {/* Glowing Ring Accent */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 to-purple-650 rounded-[30px] blur opacity-20 -z-10 animate-pulse pointer-events-none" />

            {/* Interactive Badge: 5 Days Free Trial */}
            <div className="absolute -top-4 right-4 sm:-right-6 bg-amber-500 text-slate-950 border-2 border-amber-400 px-4 py-2.5 rounded-2xl shadow-xl z-20 transform hover:scale-105 transition-transform cursor-pointer" onClick={onOpenTrialModal}>
              <div className="flex items-center gap-1.5">
                <Award className="w-5 h-5 text-slate-950 animate-pulse" />
                <div className="text-left leading-none">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-900 opacity-95">Limited Pass</span>
                  <span className="text-sm font-black uppercase tracking-tight">5 Days Free Trial</span>
                </div>
              </div>
            </div>

            {/* Interactive Badge 2: Individual Focus indicator */}
            <div className="absolute -bottom-4 -left-2 sm:-left-8 glass text-white px-4 py-3 rounded-2xl shadow-xl z-20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-450 animate-ping" />
              <div className="text-left">
                <p className="text-xs font-extrabold text-indigo-300 tracking-wider">Weekly Tests</p>
                <p className="text-[11px] text-slate-300">Continuous Assessment</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
