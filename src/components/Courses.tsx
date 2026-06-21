import { useState } from 'react';
import { BookOpen, Check, Award, Layout, Globe, Star, Users } from 'lucide-react';
import { COURSES_DATA, BOARDS_DATA, Course } from '../types';

interface CoursesProps {
  onOpenTrialModal: () => void;
}

export default function Courses({ onOpenTrialModal }: CoursesProps) {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(COURSES_DATA[1].id); // default to Middle School

  const selectedCourse = COURSES_DATA.find((c) => c.id === selectedCourseId) || COURSES_DATA[1];

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest bg-white/5 text-indigo-350 px-3 py-1 rounded-md inline-block border border-white/10">
            Our Learning Wings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
            Tailor-made Curriculum For Every Academic Grade
          </h2>
          <p className="text-sm sm:text-base text-slate-350 max-w-xl mx-auto">
            From primary foundation skills to advanced board level preparation, we map every syllabus with complete precision, bilingual explanation, and extensive mock testing.
          </p>
        </div>

        {/* Tab System Wrapper */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Quick Tab Selectors (4 Cols on large) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-350 block mb-1">
              Select Academics Wing:
            </span>
            {COURSES_DATA.map((course) => {
              const isActive = course.id === selectedCourseId;
              return (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourseId(course.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-indigo-605 shadow-lg transform scale-[1.01]'
                      : 'glass text-slate-300 border-white/5 hover:bg-white/5 hover:border-white/15'
                  }`}
                >
                  <p className={`text-xs uppercase tracking-wider font-extrabold ${isActive ? 'text-indigo-150' : 'text-slate-450'}`}>
                    {course.classes}
                  </p>
                  <h3 className="text-base font-black mt-0.5 leading-snug">{course.name}</h3>
                </button>
              );
            })}
          </div>

          {/* Tab Information Active Details Panel (8 Cols on large) */}
          <div className="lg:col-span-8 glass rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${selectedCourse.gradient} opacity-5 rounded-bl-full pointer-events-none`} />

            {/* Wing Detail Card */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{selectedCourse.name}</h3>
                  <p className="text-xs sm:text-sm font-bold text-indigo-400 uppercase tracking-widest mt-0.5">{selectedCourse.classes}</p>
                </div>
                <div className="flex items-center gap-1 bg-amber-500/15 text-amber-300 px-3 py-1.5 rounded-lg border border-amber-500/20 text-xs font-bold leading-none">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span>Result-Oriented Batch</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedCourse.description}
              </p>

              {/* Subjects covered */}
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-405" /> Subjects Covered In Detail:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                  {selectedCourse.subjects.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-slate-200 text-xs font-semibold border border-white/5 transition-all duration-150">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Board and Medium configuration info grids */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                
                {/* Board supported */}
                <div className="space-y-2.5">
                  <h5 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 flex items-center gap-1.5">
                    <Layout className="w-4 h-4 text-indigo-455" /> Covered Boards:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.boards.map((board) => (
                      <span
                        key={board}
                        className="px-2.5 py-1 bg-white/5 text-slate-300 border border-white/10 text-xs font-bold rounded-md"
                      >
                        {board}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Medium layout */}
                <div className="space-y-2.5">
                  <h5 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-purple-400" /> Choose Your Medium:
                  </h5>
                  <div className="flex gap-2">
                    {selectedCourse.mediums.map((med) => (
                      <span
                        key={med}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-black rounded-lg"
                      >
                        {med}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Direct Booking call to action */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <p className="text-xs font-bold text-white">Interested in attending a free trial session?</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Includes free worksheets and access for 5 full days.</p>
                </div>
                <button
                  onClick={onOpenTrialModal}
                  className="w-full sm:w-auto px-5 py-2.5 bg-indigo-650 hover:bg-indigo-600 text-white font-bold text-xs rounded-lg shadow-md transition-all cursor-pointer"
                >
                  Book Free Seat Now
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Boards Support Section */}
        <div id="boards" className="pt-8 mb-4 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-extrabold text-indigo-405 tracking-wider block uppercase">Boards We Specialize in</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
              Specialized Support For Board Formats
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {BOARDS_DATA.map((board) => (
              <div
                key={board.name}
                className="glass rounded-xl p-6 shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-black text-white">{board.name}</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold tracking-widest bg-indigo-500/25 text-indigo-300 border border-indigo-500/20 uppercase">
                      {board.code}
                    </span>
                  </div>
                  <p className="text-xs text-slate-450 leading-relaxed">{board.description}</p>
                  
                  {/* Features Bullet details */}
                  <ul className="space-y-2 pt-2">
                    {board.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 text-xs font-semibold text-slate-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 text-center">
                  <p className="text-[10px] text-slate-450 uppercase font-extrabold tracking-widest">Syllabus Checked & Completed Hand-in-Hand</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
