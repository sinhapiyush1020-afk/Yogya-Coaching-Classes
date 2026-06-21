import { HeartHandshake, Check, Award, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { INST_DETAILS } from '../types';

interface AboutProps {
  onOpenTrialModal: () => void;
}

export default function AboutUs({ onOpenTrialModal }: AboutProps) {
  // Path to the beautiful personal attention teaching photo
  const personalAttentionImgSrc = '/src/assets/images/coaching_personal_attention_1782045352308.jpg';

  const highlightsList = [
    {
      title: 'Individual Doubt Clearing Rooms',
      desc: 'Separate focused operational hours to resolve personal logical blocks from homework or textbook assignments.'
    },
    {
      title: 'Multilingual Curriculum Support',
      desc: 'Complete textbooks and test worksheets generated in both high-standard English and simplified Hindi Mediums.'
    },
    {
      title: 'Structured Homework Monitoring',
      desc: 'Daily checkpoints on student diaries with systematic parent confirmation checks to build persistent study habits.'
    },
    {
      title: 'Safe & Clean Digital Classrooms',
      desc: 'Hygienic learning spaces with ergonomic desks, excellent lighting, and complete focus on safety parameters.'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Visual backdrop decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Section (5 Cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-slate-900">
              <img
                src={personalAttentionImgSrc}
                alt="Personalized student attention at Yogya Coaching Classes Kanpur"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-5 left-5 right-5 glass text-white p-4 rounded-2xl shadow-lg">
                <div className="flex gap-3 items-center">
                  <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-300 border border-indigo-500/20">
                    <HeartHandshake className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-widest text-indigo-300">Our Core Promise</h4>
                    <p className="text-base font-black">Personal Attention For Every Class</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Circle badge */}
            <div className="absolute -top-6 -right-6 bg-amber-500 text-slate-950 px-5 py-4 rounded-2xl shadow-lg z-10 transform rotate-6 border-2 border-amber-400 text-center">
              <span className="font-mono text-3xl font-black block leading-none">1:15</span>
              <span className="text-[10px] tracking-wider uppercase font-extrabold block">Max Student-Teacher Ratio</span>
            </div>
          </div>

          {/* Text Content Block (7 Cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest bg-white/5 text-indigo-350 px-3 py-1 rounded-md inline-block border border-white/10">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Empowering Students of Kanpur to Achieve <span className="text-gradient">Academic Brilliance</span>
              </h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Established with the core belief that every student possesses unlimited potential when given the right guidance, <strong className="text-white">Yogya Coaching Classes</strong> has grown into one of Kanpur's most reliable educational names. Our head office at Barra-5 and branch at Gujaini cater to quality coaching for <strong>Classes 1st to 12th</strong>, combining textbook topics with interactive learning systems.
            </p>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-450" /> Dynamic Bilingual Framework
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether your child studies in are <strong>UP Board, CBSE, or ICSE / CISCE</strong> schools, we offer dedicated bilingual study packs. Our class instructions are structured in clean English with simple Hindi explanations, eliminating learning fears for both English and Hindi medium children.
              </p>
            </div>

            {/* List entries */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {highlightsList.map((hl, index) => (
                <div key={index} className="p-4 rounded-xl border border-white/5 hover:border-white/15 bg-white/2 hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm leading-snug">{hl.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{hl.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action hooks */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-indigo-500/20 cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
              >
                Book Your Seat (5 Days Trial)
              </button>
              <div className="text-center sm:text-left text-xs text-slate-400 font-semibold leading-relaxed">
                No fee required beforehand. Access all lessons, doubt counters,<br className="hidden sm:block" /> and take home detailed syllabus reports.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
