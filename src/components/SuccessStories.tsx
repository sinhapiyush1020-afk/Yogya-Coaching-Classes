import { useState } from 'react';
import { Star, MessageSquareCode, Quote, Award, Sparkles, UserCheck } from 'lucide-react';
import { SUCCESS_STORIES, TESTIMONIALS } from '../types';

export default function SuccessStories() {
  // Path to the beautiful student success illustration generated previously
  const successImageSrc = '/src/assets/images/coaching_student_success_1782045367789.jpg';
  
  // Highlighting active testimonial index for interactive carousel/tabs
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="success" className="py-20 relative overflow-hidden">
      {/* visual blurs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest bg-white/5 text-indigo-350 px-3 py-1 rounded-md inline-block border border-white/10">
            Student Triumphs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Our Hall of Fame: Inspiring Performance Meets Structured Guidance
          </h2>
          <p className="text-sm sm:text-base text-slate-350">
            Year after year, Yogya students secure outstanding results across all major boards in Kanpur. Check out our high scorers and hear detailed feedback from their delighted parents.
          </p>
        </div>

        {/* 1. Student Success Grid with High Scorers */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-24">
          
          {/* Toppers list cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-tight">Recent Board Top Scorers</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SUCCESS_STORIES.map((story) => (
                <div
                  key={story.id}
                  className="glass rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-white/15 hover:scale-[1.01] transition-all duration-200 relative overflow-hidden group"
                >
                  {/* Topper banner accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-655" />
                  
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      {story.classYear}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-350 border border-emerald-500/20 text-sm font-black italic">
                      {story.percentage} Score
                    </span>
                  </div>

                  <h4 className="text-base font-black text-white group-hover:text-indigo-300 transition-colors">
                    {story.studentName}
                  </h4>
                  
                  <p className="text-xs font-semibold text-indigo-400 mt-0.5">
                    {story.board}
                  </p>
                  
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {story.achievement}
                  </p>
                </div>
              ))}
            </div>

            {/* General Disclaimer Badge */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 text-xs text-indigo-300 font-semibold">
              <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 animate-bounce" />
              <span>Syllabus mapped comprehensively on strict UPMS, CBSE & CISCE evaluation blueprints.</span>
            </div>

          </div>

          {/* Success Picture column (5 Cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-slate-900">
              <img
                src={successImageSrc}
                alt="Ambitious Indian students celebrating high marks and academic achievements"
                className="w-full h-auto object-cover hover:scale-101 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />
              
              {/* Overlay quote */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-center sm:text-left space-y-1">
                <span className="inline-block px-2 py-0.5 text-[9px] font-extrabold uppercase bg-emerald-500 text-slate-950 rounded mb-1 tracking-widest leading-none">
                  Proven Success
                </span>
                <p className="text-base font-bold italic">“Guidance makes hard work count.”</p>
                <p className="text-xs text-slate-350">Yogya coaching classes ensures perfect study pacing for test board stars.</p>
              </div>
            </div>
            {/* background shape decoration */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-600/10 rounded-full blur-xl -z-10" />
          </div>

        </div>

        {/* 2. Parent Testimonial Interactive Block */}
        <div className="glass rounded-3xl shadow-xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full pointer-events-none -z-0" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Testimonial Quote panel */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-indigo-300">
                <MessageSquareCode className="w-4 h-4 text-indigo-300" />
                <span>Parents Talking About Yogya</span>
              </div>

              {/* Dynamic current reviewer box */}
              <div className="space-y-4 animate-fade-in">
                <Quote className="w-10 h-10 text-white/5 fill-white/5" />
                
                <p className="text-sm sm:text-base text-slate-200 font-medium italic leading-relaxed">
                  "{TESTIMONIALS[activeTestimonial].feedback}"
                </p>

                {/* Rating score stars */}
                <div className="flex gap-0.5">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <div className="pt-2">
                  <h4 className="text-base font-black text-white">
                    {TESTIMONIALS[activeTestimonial].parentName}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold">
                    Parent of <strong className="text-indigo-400">{TESTIMONIALS[activeTestimonial].studentName}</strong>, {TESTIMONIALS[activeTestimonial].studentClass}
                  </p>
                </div>
              </div>

            </div>

            {/* Testimonials Quick Select Sidebar selectors (4 Cols) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0 workspace-testimonis flex flex-col gap-3">
              <p className="text-xs uppercase font-extrabold text-slate-400 tracking-widest">
                Select Parent Voice:
              </p>
              {TESTIMONIALS.map((t, index) => {
                const isSelected = index === activeTestimonial;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border-white/15 shadow-sm'
                        : 'bg-transparent border-transparent text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <p className="text-xs font-extrabold text-white">{t.parentName}</p>
                    <p className="text-[10px] text-slate-450 mt-0.5">Parent of {t.studentName}</p>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
