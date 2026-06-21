import { GraduationCap, Phone, MapPin, Mail, ShieldAlert, Heart, Landmark, ChevronUp } from 'lucide-react';
import { INST_DETAILS, LOCATIONS } from '../types';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-slate-400 text-xs sm:text-sm pt-16 pb-12 relative border-t border-white/10 bg-slate-950/40">
      
      {/* Scroll to top floating button */}
      <div className="absolute top-0 right-10 transform -translate-y-1/2">
        <button
          onClick={handleScrollToTop}
          className="p-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all text-sm font-bold flex items-center justify-center cursor-pointer"
          title="Scroll To Top"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Brand Column (4 Cols) */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white p-2 rounded-xl shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold text-white uppercase tracking-tight">
              Yogya <span className="text-indigo-400">Classes</span>
            </span>
          </div>

          <p className="text-slate-405 text-[11px] sm:text-xs leading-relaxed max-w-sm">
            Yogya Coaching Classes is committed to providing outstanding, result-oriented coaching for Class 1st to 12th students. We build deep conceptual understanding, high exam confidence, and dynamic talent development.
          </p>

          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>for Kanpur's ambitious youth.</span>
          </div>
        </div>

        {/* Links Column (3 Cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
            Syllabus Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            {['#home', '#about', '#courses', '#why-us', '#methodology', '#success', '#contact'].map((href) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-indigo-300 transition-colors capitalize text-slate-400"
                >
                  {href.substring(1).replace('-', ' ')} Wing
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Addresses Column (5 Cols) */}
        <div className="md:col-span-5 space-y-4">
          <h4 className="text-xs uppercase font-extrabold text-white tracking-widest flex items-center gap-1.5">
            <Landmark className="w-4 h-4 text-indigo-400" /> Kanpur Locations & Contact Helpdesks
          </h4>

          <div className="space-y-4 text-xs">
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-extrabold text-white">{loc.title}:</p>
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-400">{loc.address}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {loc.phone.map((ph) => (
                    <a
                      key={ph}
                      href={`tel:+91${ph}`}
                      className="hover:text-white font-mono hover:underline inline-flex items-center gap-1 text-[11px] text-slate-450"
                    >
                      <Phone className="w-2.5 h-2.5 text-indigo-400" /> {ph}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-[11px] text-slate-500">
        <div>
          <p>© {new Date().getFullYear()} Yogya Coaching Classes. All academic rights reserved.</p>
          <p className="mt-1">ML-146 Barra-5 & B-51 Gujaini, Kanpur, Uttar Pradesh.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3 text-slate-500" /> info@yogyacoaching.com
          </span>
          <span>•</span>
          <span className="text-slate-500">Admissions Open 2026-2027</span>
        </div>
      </div>

    </footer>
  );
}
