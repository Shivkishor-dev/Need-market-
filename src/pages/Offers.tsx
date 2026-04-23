import { motion } from 'motion/react';
import { ShoppingCart, Tag, Clock } from 'lucide-react';
import { OFFERS, BUSINESS_INFO } from '../constants/data';

export default function Offers() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-yellow-400 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <span className="text-blue-900 font-bold tracking-widest text-sm uppercase">Big Savings</span>
              <h1 className="text-4xl md:text-6xl font-bold text-blue-950 mt-4 mb-6 uppercase italic">Weekly Specials</h1>
              <p className="text-blue-900 max-w-2xl mx-auto text-lg font-medium">
                Unbeatable deals on your daily essentials. Grab them before they're gone!
              </p>
            </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {OFFERS.map((offer, idx) => (
              <motion.div 
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] p-8 shadow-2xl border border-gray-50 flex flex-col items-center text-center hover:shadow-yellow-400/10 transition-all relative overflow-hidden"
              >
                <div className="absolute top-6 left-6 z-10 bg-red-600 text-white font-bold py-2 px-6 rounded-full text-xs uppercase tracking-tighter">
                  {offer.discount}
                </div>
                
                <div className="w-full h-64 overflow-hidden rounded-3xl mb-8">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" referrerPolicy="no-referrer" />
                </div>

                <h3 className="text-2xl font-bold text-blue-950 mb-4">{offer.title}</h3>
                
                <div className="flex items-center space-x-4 mb-10">
                  <span className="text-4xl font-extrabold text-blue-900">{offer.price}</span>
                  <span className="text-gray-400 line-through text-lg">{offer.originalPrice}</span>
                </div>

                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I'd like to order the ${offer.title} deal`}
                  className="w-full bg-blue-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center space-x-3"
                >
                  <ShoppingCart size={22} />
                  <span>Get This Deal</span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-blue-950 rounded-[50px] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl text-center md:text-left">
                   <div className="flex items-center text-yellow-400 space-x-2 justify-center md:justify-start mb-4">
                      <Clock size={20} />
                      <span className="font-bold tracking-widest text-xs uppercase">Limited Time Only</span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 italic">Next Reset in <span className="text-yellow-400 tracking-wider">3 DAYS</span></h2>
                   <p className="text-gray-400 text-lg">Our offers reset every Saturday. Make sure to visit us frequently for the latest discounts.</p>
                </div>
                <div className="flex bg-white/5 p-8 rounded-full border border-white/10">
                   <Tag size={64} className="text-yellow-400 -rotate-12" />
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
