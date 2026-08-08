// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "./ContactForm";
// import ContactInfo from "./ContactInfo";

// export default function Contact() {
//   return (
//     <main className="max-h-[345px] bg-altiusLight flex flex-col justify-between">
//       <div>
//         <Navbar />
//         <div className="max-w-4xl mx-auto py-16 px-6">
//           <h1 className="font-serif text-4xl font-bold text-altiusNavy text-center mb-2">Get in Touch with Altius</h1>
//           <p className="text-center text-gray-600 mb-10">Have questions about our classes? Fill out the form below or reach out directly.</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <ContactForm />
//             <ContactInfo />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }





'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col justify-between bg-altiusLight text-altiusNavy">
      <div>
        <Navbar />
        
        {/* Contact Section with Increased Height and Vertical Padding */}
        <section className="pt-36 pb-32 px-6 min-h-[85vh] flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-altiusBlue font-semibold uppercase tracking-widest text-xs">Get In Touch</span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-altiusNavy mt-2">We&apos;d Love to Hear From You</h1>
              <p className="text-gray-600 mt-4 text-sm md:text-base">
                Have questions about our programs, batches, or admissions? Reach out to us or fill out the form below.
              </p>
            </div>

            {/* Grid Layout: Contact Info & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Column: Contact Information Cards */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-altiusNavy text-white p-8 md:p-10 rounded-3xl shadow-xl">
                <div>
                  <span className="text-altiusGold font-semibold uppercase tracking-widest text-xs">Contact Info</span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-2 mb-6">Let&apos;s Start a Conversation</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    Our team is available Monday through Saturday to answer all your academic queries.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-altiusGold font-bold">
                        📍
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">Our Location</h4>
                        <p className="text-gray-300 text-xs mt-1">123 Education Hub, Main Street, City</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-altiusGold font-bold">
                        📞
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">Phone Number</h4>
                        <p className="text-gray-300 text-xs mt-1">+91 98765 43210</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-altiusGold font-bold">
                        ✉️
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">Email Address</h4>
                        <p className="text-gray-300 text-xs mt-1">info@altiuseducation.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-xs text-gray-400">
                  Working Hours: Mon - Sat (9:00 AM - 7:00 PM)
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-200/80 shadow-xl flex flex-col justify-center">
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-altiusNavy">Thank You!</h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                      Your message has been successfully sent. Our admissions team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 bg-altiusBlue text-white text-xs font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition tracking-wider uppercase"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-serif text-2xl font-bold text-altiusNavy mb-2">Send Us a Message</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Aarav Kapoor"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-altiusBlue transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-altiusBlue transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="aarav@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-altiusBlue transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Select Program</label>
                      <select
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-altiusBlue transition bg-white text-gray-700"
                      >
                        <option>Foundation Program (Class 8th - 10th)</option>
                        <option>Advanced Test Prep (JEE / NEET)</option>
                        <option>Board Exam Excellence</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your academic goals..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-altiusBlue transition resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-altiusBlue text-white text-xs font-semibold py-4 rounded-xl shadow-md hover:bg-blue-600 transition tracking-wider uppercase"
                    >
                      Submit Enquiry Now
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}