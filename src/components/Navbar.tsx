import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, GraduationCap, Award, MapPin } from 'lucide-react';
import { INST_DETAILS } from '../types';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export default function Navbar({ onOpenTrialModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Yogya', href: '#why-us' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Student Triumphs', href: '#success' },
    { label: 'Contact & Addresses', href: '#contact' },
  ];

  const handleWhatsAppEnquiry = () => {
    const textMsg = encodeURIComponent(INST_DETAILS.whatsappMsg);
    window.open(`https://wa.me/916388562019?text=${textMsg}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto">
      {/* Top Banner with Direct Contact Info */}
      <div className="bg-slate-950/90 text-white text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-indigo-455" />
              Kanpur, UP (Barra-5 & Gujaini)
            </span>
            <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-4">
              <span className="text-slate-400">Call Admissions:</span>
              {INST_DETAILS.phoneNumbers.map((num) => (
                <a
                  key={num}
                  href={`tel:+91${num}`}
                  className="hover:text-indigo-400 font-bold tracking-wider transition-colors duration-200"
                >
                  {num}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-widest bg-indigo-500 text-white animate-pulse">
              Admissions Open 2026-27
            </span>
            <button
              onClick={handleWhatsAppEnquiry}
              className="flex items-center gap-1 hover:text-emerald-300 font-medium transition-colors text-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              WhatsApp Live Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-3 shadow-2xl shadow-indigo-950/20'
            : 'bg-slate-900/40 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <a href="#home" id="nav-brand-logo" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/20 transform group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1 uppercase">
                Yogya
                <span className="text-indigo-300 font-extrabold normal-case text-base tracking-wide bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                  Classes
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                Kanpur's Premium Coaching
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-slate-300 hover:text-indigo-400 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTrialModal}
              id="nav-cta-trial"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-95 transition-all duration-150 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-300" />
              Book 5-Day Free Trial
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[116px] bg-slate-950/60 backdrop-blur-md z-40" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="w-4/5 max-w-sm glass-dark h-screen shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-bold text-white">Quick Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-semibold text-slate-350 hover:text-indigo-400 hover:bg-white/5 rounded-xl transition-all"
                  >
                     {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10 mb-20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Award className="w-5 h-5 text-amber-300 animate-pulse" />
                Enroll For 5-Day Free Trial
              </button>

              <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-2 text-xs text-slate-350">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" /> Need Instant Help?
                </p>
                <div className="grid grid-cols-2 gap-1 font-mono text-[11px] font-bold text-slate-300">
                  <a href="tel:+916388562019" className="hover:underline">6388562019</a>
                  <a href="tel:+918001784236" className="hover:underline">8001784236</a>
                  <a href="tel:+918554972417" className="hover:underline">8554972417</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
