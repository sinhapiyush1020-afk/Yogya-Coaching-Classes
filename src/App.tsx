/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageSquare, Award, Phone, Calendar, HeartHandshake, Sparkles, AlertCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { INST_DETAILS } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedClass, setSelectedClass] = useState('Class 10th (Board Prep)');
  const [selectedBranch, setSelectedBranch] = useState('Barra-5 Head Office');
  const [selectedMedium, setSelectedMedium] = useState('English Medium');
  const [selectedBoard, setSelectedBoard] = useState('CBSE');
  const [errorText, setErrorText] = useState('');
  const [registeredName, setRegisteredName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Custom toast notification when lead is submitted via the Contact bottom form
  const [toastName, setToastName] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerLeadToast = (name: string) => {
    setToastName(name);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!studentName.trim() || !parentName.trim() || !phone.trim()) {
      setErrorText('Please fill in all primary details.');
      return;
    }

    if (phone.length < 10) {
      setErrorText('Please provide a valid 10-digit mobile number.');
      return;
    }

    // Save lead in local storage
    const registrationLead = {
      id: 'modal-lead-' + Date.now(),
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

    setRegisteredName(studentName);
    setIsSuccess(true);
    triggerLeadToast(studentName);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Reset specific states
    setStudentName('');
    setParentName('');
    setPhone('');
    setIsSuccess(false);
    setErrorText('');
  };

  const handleSendWhatsAppPass = () => {
    const customMessage = `Hello Yogya Classes, I want to confirm my child's 5-Day Free Trial slot registration. Here are the core details:
- Student Name: ${registeredName || studentName}
- Parent Name: ${parentName}
- Contact Phone: ${phone}
- Target Class: ${selectedClass}
- Language Medium: ${selectedMedium}
- Affiliated Board: ${selectedBoard}
- Nearest Branch Desk: ${selectedBranch}
Thank you. Please share our trial dates.`;

    window.open(`https://wa.me/916388562019?text=${encodeURIComponent(customMessage)}`, '_blank');
  };

  return (
    <div className="min-h-screen mesh-bg text-slate-200 font-sans antialiased scroll-smooth selection:bg-indigo-500/30 selection:text-indigo-100 pointer-events-auto">
      
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenTrialModal={() => setIsModalOpen(true)} />

      {/* Main Website Sections */}
      <main className="relative">
        
        {/* Hero Area */}
        <Hero onOpenTrialModal={() => setIsModalOpen(true)} />

        {/* Section B: About Us story of Kanpur */}
        <AboutUs onOpenTrialModal={() => setIsModalOpen(true)} />

        {/* Section C: Courses tab system, Boards coverage */}
        <Courses onOpenTrialModal={() => setIsModalOpen(true)} />

        {/* Section D: Why choose Yogya (9 elements list + Methodology timeline) */}
        <WhyChooseUs onOpenTrialModal={() => setIsModalOpen(true)} />

        {/* Section E: Student Toppers & Parent testimonials */}
        <SuccessStories />

        {/* Section F: Direct Registration Leads capture contact form & branch listings */}
        <Contact onSuccessSubmit={(name) => triggerLeadToast(name)} />

      </main>

      {/* Footer information bar */}
      <Footer />

      {/* LEAD TOAST NOTIFICATION - Floating Alert on bottom index */}
      {showToast && (
        <div id="lead-toast" className="fixed bottom-6 left-6 right-6 sm:left-auto sm:max-w-md glass text-white rounded-2xl shadow-2xl p-4 z-50 flex items-start gap-3 animate-in fade-in-50 slide-in-from-bottom-10 duration-300">
          <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-xl flex-shrink-0 border border-emerald-500/20">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Pass Reserved Successfully</p>
            <p className="text-xs text-slate-300">
              Seat for <strong className="text-white font-bold">{toastName}</strong> has been secured for the free trial batches at Yogya classes! We are preparing the schedules.
            </p>
          </div>
          <button onClick={() => setShowToast(false)} className="text-slate-450 hover:text-white p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 5-DAY FREE TRIAL REGISTRATION PASS MODAL POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-dark rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
            
            {/* Top decorative badge */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-6 py-5 text-white flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-300 animate-pulse" />
                <div>
                  <h3 className="text-lg font-black leading-none tracking-tight">5-Day Trial Admission Pass</h3>
                  <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-1">Yogya Coaching Classes • Kanpur</p>
                </div>
              </div>
              <button
                onClick={handleModalClose}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form body */}
            <div className="p-6">
              {isSuccess ? (
                /* Interactive Digital Voucher Output */
                <div className="text-center space-y-5 py-4">
                  <div className="border-4 border-dashed border-emerald-500/40 rounded-2xl p-5 bg-emerald-500/10 relative">
                    <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] uppercase font-black bg-emerald-500 text-white rounded tracking-widest">Active pass</span>
                    
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Admission Voucher</p>
                    <p className="text-2xl font-black text-white mt-1 uppercase tracking-wider">YOGYA-TRIAL-PAS</p>
                    
                    <div className="my-3 border-t border-dashed border-white/10" />
                    
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <p><strong>Student:</strong> {registeredName || studentName}</p>
                      <p><strong>Selected Grade:</strong> {selectedClass}</p>
                      <p><strong>Medium / Board:</strong> {selectedMedium} ({selectedBoard})</p>
                      <p><strong>Assigned Branch:</strong> {selectedBranch}</p>
                    </div>

                    <div className="mt-4 bg-white/5 py-1.5 border border-emerald-500/20 rounded-lg text-[10px] text-emerald-300 font-bold">
                      Valid for 5 Classroom Lectures • Doubts Clearance • Worksheets
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs text-slate-450 leading-relaxed font-semibold">
                      Your trial slot is successfully flagged as pending verify. Send this dynamic voucher immediately via WhatsApp to fast-track approval!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <button
                        onClick={handleSendWhatsAppPass}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md cursor-pointer transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 fill-white text-white" />
                        Send Pass to WhatsApp Desk
                      </button>
                      <button
                        onClick={handleModalClose}
                        className="py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                      >
                        Close & Browse
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Primary lead inputs */
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  
                  {errorText && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2 text-xs text-red-405 font-bold">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>{errorText}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Student Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Ayush Verma"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full p-2.5 bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:outline-none rounded-xl text-xs font-semibold"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Parent Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Mr. Rajesh Verma"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        className="w-full p-2.5 bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:outline-none rounded-xl text-xs font-semibold"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Mobile Contact *</label>
                      <input
                        type="tel"
                        placeholder="10 digit mobile (e.g. 6388562019)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full p-2.5 bg-white/5 border border-white/10 text-white focus:border-indigo-500 focus:outline-none rounded-xl text-xs font-bold font-mono"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Target Grade</label>
                      <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="w-full p-2.5 bg-slate-900 border border-white/10 text-slate-200 focus:border-indigo-500 focus:outline-none rounded-xl text-xs font-medium"
                      >
                        <option value="Class 1st to 5th">Primary foundation (1st-5th)</option>
                        <option value="Class 6th to 8th">Middle School (6th-8th)</option>
                        <option value="Class 9th">Class 9th</option>
                        <option value="Class 10th (Board Prep)">Class 10th (Board Prep)</option>
                        <option value="Class 11th">Class 11th</option>
                        <option value="Class 12th (Board Star)">Class 12th (Board Star)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Board</label>
                      <select
                        value={selectedBoard}
                        onChange={(e) => setSelectedBoard(e.target.value)}
                        className="w-full p-2 bg-slate-900 border border-white/10 text-slate-200 focus:outline-none text-xs rounded-lg"
                      >
                        <option value="CBSE">CBSE</option>
                        <option value="UP Board">UP Board</option>
                        <option value="ICSE / ISC">ICSE / ISC</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Medium</label>
                      <select
                        value={selectedMedium}
                        onChange={(e) => setSelectedMedium(e.target.value)}
                        className="w-full p-2 bg-slate-900 border border-white/10 text-slate-200 focus:outline-none text-xs rounded-lg"
                      >
                        <option value="English Medium">English</option>
                        <option value="Hindi Medium">Hindi</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400">Branch</label>
                      <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        className="w-full p-2 bg-slate-900 border border-white/10 text-slate-200 focus:outline-none text-xs rounded-lg"
                      >
                        <option value="Barra-5 Head Office">Barra-5</option>
                        <option value="Gujaini Branch">Gujaini</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-2">
                    <HeartHandshake className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <p className="text-[10px] text-slate-400 font-medium">
                      No security deposit or registration fees. Includes 5 full instruction days, personal evaluation sheets, and class worksheets.
                    </p>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={handleModalClose}
                      className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer"
                    >
                      Secure Free Pass
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
import SEO from "./components/SEO";

{

(
<>
<SEO />

{/* tumhara pura website */}
</>

)

}


