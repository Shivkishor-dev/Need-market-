import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Star, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email or store in a DB
    alert("Thank you! Your message has been received. We'll get back to you shortly.");
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
           >
            <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">Contact Us</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
              We are available 24/7 to assist you. Visit us in Barsha Heights or reach out via phone, WhatsApp, or email.
            </p>
           </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-blue-950 mb-8">Visit Needs Market</h2>
                <div className="space-y-8">
                   <div className="flex items-start space-x-6">
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                         <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-950 text-xl mb-2">Location</h4>
                        <p className="text-gray-600 font-medium">{BUSINESS_INFO.location}</p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-6">
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                         <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-950 text-xl mb-2">Phone & WhatsApp</h4>
                        <p className="text-gray-600 font-medium mb-1">Office: {BUSINESS_INFO.phone}</p>
                        <p className="text-gray-600 font-medium">WhatsApp: {BUSINESS_INFO.phone}</p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-6">
                      <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                         <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-950 text-xl mb-2">Opening Hours</h4>
                        <p className="text-gray-600 font-bold text-lg text-blue-900">{BUSINESS_INFO.openingHours}</p>
                        <p className="text-gray-500 text-sm mt-1">Open on all public holidays and weekends.</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="p-8 bg-yellow-400 rounded-3xl shadow-xl flex items-center justify-between">
                <div>
                  <div className="flex text-blue-900 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-blue-900 font-bold text-xl leading-snug">Rated 4.0/5.0 <br /> <span className="text-sm font-medium opacity-80">on Google Reviews</span></p>
                </div>
                <div className="bg-white/20 p-4 rounded-2xl">
                   <Clock size={40} className="text-blue-900" />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-blue-950 mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all outline-none" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all outline-none" 
                      placeholder="+971 -- --- ----"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all outline-none" 
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-widest pl-1">Your Message</label>
                  <textarea 
                    rows={5} 
                    required 
                    className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-blue-900/10 focus:border-blue-900 transition-all outline-none resize-none" 
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-900 text-white font-bold py-5 rounded-2xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 text-lg flex items-center justify-center space-x-3"
                >
                  <MessageSquare size={22} />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="text-blue-900 font-bold tracking-widest text-sm uppercase">Find Us</span>
                <h2 className="text-4xl font-bold text-blue-950 mt-2">Location & Map</h2>
              </div>
              <a 
                href="https://maps.app.goo.gl/3Xg4Y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-900 border border-blue-100 px-6 py-3 rounded-xl font-bold hover:bg-blue-900 hover:text-white transition-all shadow-sm"
              >
                Open in Google Maps
              </a>
           </div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full h-[600px] bg-white rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
           >
              <iframe 
                src={BUSINESS_INFO.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Needs Market Location"
              ></iframe>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
