import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart, Info, Heart, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/data';

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-blue-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
             className="text-center"
           >
            <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">About Needs Market</h1>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed">
              Serving our community with passion since we opened our doors in Barsha Heights. We are more than just a grocery store; we are your reliable neighbour, open 24/7.
            </p>
           </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-blue-950 leading-tight">Driven by Quality, <br />Available <span className="text-yellow-500 italic">24/7</span>.</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Needs Market, we understand the fast-paced lifestyle of Dubai and specifically Barsha Heights. Whether you are a professional coming back late from work or a parent needing early morning essentials, we ensure our shelves are always stocked and our doors always open.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <span className="text-3xl font-bold text-blue-950">24/7</span>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Always Open</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <span className="text-3xl font-bold text-blue-950">222+</span>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Loyal Customers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
               <img 
                 src="https://images.unsplash.com/photo-1543083477-4f7f44aad226?q=80&w=2070&auto=format&fit=crop" 
                 alt="Needs Market Interior" 
                 className="relative z-10 w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-8 -right-8 bg-yellow-400 p-8 rounded-3xl shadow-xl z-20 flex items-center space-x-4">
                  <div className="bg-blue-900 text-white p-3 rounded-xl">
                    <Info size={32} />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-blue-900 block">4.0 STARS</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                 { 
                   icon: <ShieldCheck size={32} className="text-blue-900" />, 
                   title: "Trust & Safety", 
                   desc: "All our products are handled with the highest safety and hygiene standards." 
                 },
                 { 
                   icon: <Heart size={32} className="text-blue-900" />, 
                   title: "Community First", 
                   desc: "We support our neighbourhood and grow with the community in Barsha Heights." 
                 },
                 { 
                   icon: <ShoppingCart size={32} className="text-blue-900" />, 
                   title: "Availability", 
                   desc: "Our 'Open 24 Hours' commitment is our promise of reliability to you." 
                 }
               ].map((value, idx) => (
                 <motion.div 
                   key={idx}
                   whileHover={{ y: -10 }}
                   className="bg-white p-10 rounded-[40px] shadow-xl text-center flex flex-col items-center"
                 >
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                       {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
