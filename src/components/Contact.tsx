import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle2, MessageSquare, AlertCircle, HelpCircle, Map, Info } from 'lucide-react';
import { INST_DETAILS, LOCATIONS } from '../types';

interface ContactProps {
  onSuccessSubmit: (studentName: string) => void;
}

export default function Contact({ onSuccessSubmit }: ContactProps) {
  // Form submission state
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedClass, setSelectedClass] = useState('Class 10th');
  const [selectedBranch, setSelectedBranch] = useState('Barra-5 Head Office');
  const [selectedMedium, setSelectedMedium] = useState('English Medium');
  const [selectedBoard, setSelectedBoard] = useState('CBSE');
  const [errorText, setErrorText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [expandedMaps, setExpandedMaps] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!studentName.trim() || !parentName.trim() || !phone.trim()) {
      setErrorText('Please fill in all the primary fields (Student Name, Parent Name, Mobile Number).');
      return;
    }

    if (phone.length < 10) {
      setErrorText('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Save registration lead in localStorage
    const registrationLead = {
      id: 'lead-' + Date.now(),
      studentName,
      parentName,
      phone,
      selectedClass,
      selectedBranch,
      selectedMedium,
      selectedBoard,
      timestamp: new Date().toISOString()
    };

    try {
      const existingLeads = JSON.parse(localStorage.getItem('yogya_leads') || '[]');
      existingLeads.push(registrationLead);
      localStorage.setItem('yogya_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.warn('Storage saving error', err);
    }

    setIsSuccess(true);
    onSuccessSubmit(studentName);

    // Auto trigger WhatsApp redirect optionally if the user wants
    const customMessage = `Hello Yogya Classes, I want to book a 5-Day Free Trial pass for my child. Here are the details:
- Student Name: ${studentName}
- Parent Name: ${parentName}
- Mobile Contact: ${phone}
- Core Class: ${selectedClass}
- Chosen Medium: ${selectedMedium}
- Affiliated Board: ${selectedBoard}
- Selected Branch: ${selectedBranch}
Thank you! Please schedule our free class.`;

    // Save message handle to attach for WhatsApp fallback button
    (window as any)._lastWhatsAppTextMsg = encodeURIComponent(customMessage);
  };

  const handleWhatsAppRedirectDirect = () => {
    const textMsg = (window as any)._lastWhatsAppTextMsg || encodeURIComponent(INST_DETAILS.whatsappMsg);
    window.open(`https://wa.me/916388562019?text=${textMsg}`, '_blank');
  };

  const handleResetForm = () => {
    setStudentName('');
    setParentName('');
    setPhone('');
    setIsSuccess(false);
  };

  // FAQs with integrated SEO key terms
  const faqs = [
    {
      q: 'What is Yogya Coaching Classes Kanpur known for?',
      a: 'Yogya Coaching Classes is among the best coaching classes in Kanpur. We are prominent for providing rigorous personal attention, bilingual teaching (separate English and Hindi Medium batches) for Classes 1st to 12th on UP Board, CBSE, and ICSE/CISCE syllabi.'
    },
    {
      q: 'How does the 5-Days Free Trial Class work?',
      a: 'We provide 5 consecutive days of free trial classes with no pre-requisite payment or commitment. This allows both parents and students to evaluate our friendly coaching methodology, physical workspace comfort, weekly test blueprint, and clarify batch queries.'
    },
    {
      q: 'Where are your branches located in Kanpur?',
      a: 'We have two centrally accessible branches: our Head Office is located at ML-146, Barra-5, Kanpur. Our Branch Office is at B-51, Gujaini, Kanpur. Both locations feature comfortable study setups and highly trained teachers.'
    },
    {
      q: 'Do you cover UP Board and Hindi Medium syllabus?',
      a: 'Yes, we specialize in UP Board education with dedicated modules. We teach both Hindi Medium and English Medium batches separately, ensuring complete NCERT textbook solutions, standard mock test structures, and previous years board paper analysis.'
    },
    {
      q: 'How often are parents updated about their child’s performance?',
      a: 'Yogya Classes prioritizes continuous feedback. Attendance alerts are sent on a daily basis. Marks of our Saturday Weekly Assessments are shared through personal WhatsApp updates or phone calls, followed by monthly interactive parent-teacher sessions.'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      
      {/* Search keywords tag container (Visually clean inline SEO summary for trust) */}
      <div className="bg-white/5 py-3 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-slate-400 tracking-wide">
            Top Searched Directory: <span className="text-indigo-303 italic">"Best coaching classes in Kanpur"</span> • <span className="text-indigo-303 italic">"Class 1 to 12 coaching in Kanpur"</span> • <span className="text-indigo-303 italic">"Yogya Coaching Classes Barra & Gujaini"</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest bg-white/5 text-indigo-350 px-3 py-1 rounded-md inline-block border border-white/10">
            Connect & Register
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
            Let's Set Your Child Up For Success
          </h2>
          <p className="text-xs sm:text-sm text-slate-350">
            Apply online for the 5-day free trial class, call our branch helpdesk directly, or visit our standard offices. Admissions are open for the 2026-27 batches.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Column A: Interactive Lead Form (7 Cols) */}
          <div className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 rounded-t-3xl" />
            
            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-white">Unlock 5 Days Free Admission Pass</h3>
              <p className="text-xs text-slate-400 mt-1">Submit the parameters below and our counselors will verify your slot within 2 business hours.</p>
            </div>

            {isSuccess ? (
              /* High-fidelity Success banner */
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-md border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xl font-black text-white">Registration Submitted!</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Great! We have registered student <strong className="font-extrabold text-white">{studentName}</strong> for the 5-Day Free Trial class. Our counseling desk will contact you shortly.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-xl space-y-3 border border-white/5">
                  <p className="text-xs text-slate-300 font-bold">
                    💡 Instantly speed up verification by notifying us on WhatsApp!
                  </p>
                  <button
                    onClick={handleWhatsAppRedirectDirect}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    Send Details via WhatsApp Now
                  </button>
                </div>

                <button
                  onClick={handleResetForm}
                  className="text-xs text-indigo-400 hover:text-indigo-300 underline font-semibold transition-colors mt-2"
                >
                  Register another student or edit details
                </button>
              </div>
            ) : (
              /* Lead Capture Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorText && (
                  <div className="p-3 bg-red-500/15 border border-red-500/20 rounded-xl flex items-center gap-2 text-xs text-red-300 font-bold">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{errorText}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Student Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-bold uppercase block">Student Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Priyanshu Mishra"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-white placeholder-slate-500 text-sm font-semibold"
                    />
                  </div>

                  {/* Parent Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-bold uppercase block">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Mr. Anil Mishra"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-white placeholder-slate-500 text-sm font-semibold"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Mobile Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-bold uppercase block">Mobile Contact Number *</label>
                    <input
                      type="tel"
                      placeholder="10 digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-white placeholder-slate-500 text-sm font-mono font-bold"
                    />
                  </div>

                  {/* Class selection dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-bold uppercase block">Target Class / Grade</label>
                    <select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="w-full p-3 bg-slate-900 border border-white/10 text-white rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors text-sm font-semibold"
                    >
                      <option value="Class 1st to 5th">Primary (Class 1st to 5th)</option>
                      <option value="Class 6th">Class 6th</option>
                      <option value="Class 7th">Class 7th</option>
                      <option value="Class 8th">Class 8th</option>
                      <option value="Class 9th">Class 9th</option>
                      <option value="Class 10th">Class 10th (Board Prep)</option>
                      <option value="Class 11th">Class 11th</option>
                      <option value="Class 12th">Class 12th (Board Star)</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Medium Option */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-bold uppercase block">Preferred Medium</label>
                    <div className="flex gap-2">
                      {['English Medium', 'Hindi Medium'].map((m) => {
                        const isSel = selectedMedium === m;
                        return (
                          <button
                            key={m}
                            type="button"
                            onClick={() => setSelectedMedium(m)}
                            className={`flex-1 py-2 text-center text-xs font-black rounded-lg border cursor-pointer transition-all ${
                              isSel
                                ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/35'
                                : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10'
                            }`}
                          >
                            {m.split(' ')[0]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Board Affiliate dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-bold uppercase block">Board</label>
                    <select
                      value={selectedBoard}
                      onChange={(e) => setSelectedBoard(e.target.value)}
                      className="w-full p-2.5 bg-slate-905 border border-white/10 text-white rounded-xl focus:border-indigo-500 focus:outline-none text-xs font-bold"
                    >
                      <option value="UP Board">UP Board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE / CISCE">ICSE / CISCE</option>
                    </select>
                  </div>

                  {/* Preferred Loc Branch */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-bold uppercase block">Closest Branch</label>
                    <select
                      value={selectedBranch}
                      onChange={(e) => setSelectedBranch(e.target.value)}
                      className="w-full p-2.5 bg-slate-905 border border-white/10 text-white rounded-xl focus:border-indigo-500 focus:outline-none text-xs font-bold"
                    >
                      <option value="Barra-5 Head Office">Barra-5 Head Office</option>
                      <option value="Gujaini Branch">Gujaini Branch Office</option>
                    </select>
                  </div>
                </div>

                {/* Submit button layout */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    Activate My 5-Day Free Trial Pass
                  </button>
                  <p className="text-[10px] text-slate-450 text-center mt-2">
                    🛡️ Privacy Protected: We do not distribute telephone phone listings. Leads are saved solely for admissions verification.
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Column B: Multiple Physical Branches details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-indigo-305" />
              <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-tight">Our Kanpur Branches</h3>
            </div>

            {LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  loc.isHeadOffice
                    ? 'glass text-white border-white/15'
                    : 'glass bg-white/3 text-white border-white/5 hover:border-white/12 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-base font-black leading-tight text-white">{loc.title}</h4>
                  {loc.isHeadOffice && (
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-widest bg-amber-500 text-slate-950">
                      Headquarters
                    </span>
                  )}
                </div>

                <p className={`text-xs ${loc.isHeadOffice ? 'text-indigo-200' : 'text-slate-400'} leading-relaxed mb-4`}>
                  {loc.address}
                </p>

                {/* Call numbers links inside box */}
                <div className="space-y-2">
                  <p className={`text-[10px] uppercase font-bold tracking-wider ${loc.isHeadOffice ? 'text-indigo-300' : 'text-slate-400'}`}>
                    Direct Contact Desk:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {loc.phone.map((num) => (
                      <a
                        key={num}
                        href={`tel:+91${num}`}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-extrabold transition-colors flex items-center gap-1.5 ${
                          loc.isHeadOffice
                            ? 'bg-white/10 hover:bg-white/20 text-white'
                            : 'bg-white/5 hover:bg-white/10 text-white'
                        }`}
                      >
                        <Phone className="w-3 h-3 text-emerald-400" />
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map toggle indicator bar */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-[11px] font-semibold ${loc.isHeadOffice ? 'text-indigo-200' : 'text-slate-400'}`}>
                    Exact Location Map:
                  </span>
                  <button
                    type="button"
                    onClick={() => setExpandedMaps(prev => ({ ...prev, [idx]: !prev[idx] }))}
                    className="px-2.5 py-1 rounded bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-500/45 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Map className="w-3 h-3 text-indigo-400" />
                    {expandedMaps[idx] ? 'Hide Iframe Map' : 'Show Iframe Map'}
                  </button>
                </div>

                {expandedMaps[idx] && (
                  <div className="mt-3 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-slate-950 aspect-[16/10] relative group animate-in fade-in-50 slide-in-from-top-1 duration-150">
                    <iframe
                      src={loc.isHeadOffice 
                        ? "https://maps.google.com/maps?q=ML-146%2C%20Barra%205%2C%20Kanpur%2C%20Uttar%20Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        : "https://maps.google.com/maps?q=B-51%2C%20Gujaini%2C%20Kanpur%2C%20Uttar%20Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      }
                      className="w-full h-full border-0 opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                      allowFullScreen={false}
                      loading="lazy"
                      title={loc.title}
                    ></iframe>
                    <div className="absolute top-2 left-2 bg-slate-900/95 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold text-indigo-300 pointer-events-none border border-white/5 uppercase select-none flex items-center gap-1 shadow">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Interactive Pin
                    </div>
                  </div>
                )}

                {/* Google Maps quick redirect link */}
                <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className={`${loc.isHeadOffice ? 'text-indigo-250' : 'text-slate-450'} font-medium`}> Kanpurneo Zone • Barra-5 & Gujaini</span>
                  <a
                    href={loc.gmapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-black underline transition-colors flex items-center gap-1 text-indigo-300 hover:text-indigo-150"
                  >
                    <Map className="w-3.5 h-3.5" />
                    View Directions
                  </a>
                </div>

              </div>
            ))}

            {/* General Direct dialing block */}
            <div className="p-4 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-indigo-300">Quick Mobile Admissions Help</p>
                <p className="text-sm font-black font-mono mt-0.5">8554972417 or 8001784236</p>
              </div>
              <a
                href="tel:+918554972417"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
              >
                Call Hotline
              </a>
            </div>

          </div>

        </div>

        {/* FAQs Segment for keyword clustering */}
        <div className="pt-16 border-t border-white/10">
          
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-extrabold text-indigo-405 tracking-wider uppercase block">Got academic queries?</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
              Frequently Asked Questions (FAQs)
            </h3>
            <p className="text-xs sm:text-sm text-slate-350">
              Find instant responses below regarding class timings, medium support, UP Board, CBSE or CISCE curriculum, Barra/Gujaini branches.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-white/5">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5 flex gap-4 items-start">
                <div className="bg-indigo-500/10 text-indigo-300 p-2.5 rounded-xl flex-shrink-0 border border-indigo-500/20">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white leading-snug">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-350 mt-2 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
