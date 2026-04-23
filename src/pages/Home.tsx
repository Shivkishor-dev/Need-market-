import { motion } from 'motion/react';
import { ArrowRight, Clock, Star, Phone, MapPin, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, PRODUCT_CATEGORIES, OFFERS } from '../constants/data';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2026&auto=format&fit=crop" 
            alt="Needs Market Supermarket" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 md:pt-0">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm mb-6 shadow-xl"
            >
              <Clock size={16} />
              <span>OPEN 24 HOURS, 7 DAYS A WEEK</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Freshness You <span className="text-yellow-400 italic">Need</span>, <br />
              <span className="text-yellow-400">Anytime</span> You Want.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed"
            >
              {BUSINESS_INFO.tagline}. Quality groceries from fresh produce to daily essentials, right in the heart of Barsha Heights.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/products" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all flex items-center justify-center space-x-2 shadow-2xl shadow-yellow-400/20">
                <span>Shop All Products</span>
                <ArrowRight size={20} />
              </Link>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                <ShoppingCart size={20} />
                <span>WhatsApp Order</span>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center space-x-6"
            >
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                  <Star size={18} />
                </div>
                <span className="text-white text-sm font-medium mt-1">{BUSINESS_INFO.rating} Average Rating (222+ Reviews)</span>
              </div>
              <div className="h-10 w-[1px] bg-white/20 hidden sm:block"></div>
              <div className="hidden sm:flex items-center space-x-3 text-white">
                <MapPin className="text-yellow-400" size={24} />
                <span className="text-sm font-medium">Barsha Heights, Dubai</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 1.5, repeat: Infinity }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Clock size={32} className="text-blue-900" />, title: "Open 24/7", desc: "We never close. Late night runs or early morning essentials, we are here." },
              { icon: <ShoppingCart size={32} className="text-blue-900" />, title: "Easy Ordering", desc: "Order via WhatsApp or phone. We deliver to your doorstep in Barsha Heights." },
              { icon: <Star size={32} className="text-blue-900" />, title: "Quality First", desc: "Fresh produce daily and high-quality international brands you trust." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-blue-900 transition-colors group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-blue-900 font-bold tracking-widest text-sm uppercase">Shop by Category</span>
              <h2 className="text-4xl font-bold text-blue-950 mt-2">Everything You Need</h2>
            </div>
            <Link to="/products" className="text-blue-900 font-bold flex items-center space-x-2 border-b-2 border-yellow-400 pb-1">
              <span>View All Categories</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.slice(0, 8).map((category, idx) => (
              <motion.div 
                key={category.id}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-72 rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 p-6 w-full text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <div className="h-1 w-12 bg-yellow-400 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Offers */}
      <section className="py-20 bg-blue-900 overflow-hidden relative">
         {/* Abstract background element */}
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Smart Savings</span>
            <h2 className="text-4xl font-bold text-white mt-2">Latest Weekly Offers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFERS.map((offer, idx) => (
              <motion.div 
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 shadow-2xl relative group"
              >
                <div className="absolute top-4 left-4 z-10 bg-red-600 text-white font-bold py-1 px-4 rounded-full text-sm">
                  {offer.discount}
                </div>
                <div className="h-48 overflow-hidden rounded-2xl mb-6">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-2">{offer.title}</h3>
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl font-bold text-blue-900">{offer.price}</span>
                  <span className="text-gray-400 line-through">{offer.originalPrice}</span>
                </div>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I'm interested in the ${offer.title} offer`}
                  className="w-full bg-blue-50 text-blue-900 border border-blue-100 py-3 rounded-xl font-bold flex items-center justify-center space-x-2 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all"
                >
                  <ShoppingCart size={18} />
                  <span>Order Now</span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
             <Link to="/offers" className="inline-flex items-center space-x-2 text-yellow-400 font-bold border-b-2 border-yellow-400/50 pb-1 hover:border-yellow-400 transition-all">
                <span>View All Specials</span>
                <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

       {/* Neighbourhood Section */}
       <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-yellow-400 rounded-3xl -rotate-2 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop" 
                alt="Our Neighbourhood Store" 
                className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-blue-900 text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
                <span className="text-4xl font-bold text-yellow-400 block mb-2">24/7</span>
                <span className="font-bold text-sm tracking-widest uppercase">Always Open for You</span>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <span className="text-blue-900 font-bold tracking-widest text-sm uppercase">Why Choose Us?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-4 mb-8 leading-tight">Your Trusted Neighbour in Barsha Heights</h2>
              
              <div className="space-y-8">
                {[
                  { title: "Personalised Service", desc: "We know our customers by name. Experience traditional community service with a modern touch." },
                  { title: "Arabic & English Speakers", desc: "Our staff is bilingual, making your shopping experience smooth and hassle-free." },
                  { title: "Premium Location", desc: "Located conveniently in Barsha Heights, perfect for quick runs or major restocks." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2.5 h-2.5 bg-blue-900 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 text-xl mb-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center space-x-6">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center space-x-3 group">
                   <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                   </div>
                   <div>
                      <span className="text-xs text-gray-500 font-bold block uppercase tracking-wider">Quick Call</span>
                      <span className="text-lg font-bold text-blue-950">{BUSINESS_INFO.phone}</span>
                   </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-yellow-400">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">Missing something? <br /> We're open right now.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  className="bg-blue-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all flex items-center space-x-3 shadow-xl"
                >
                  <ShoppingCart size={24} />
                  <span>Start WhatsApp Order</span>
                </a>
                <Link to="/contact" className="text-blue-900 font-bold text-xl hover:underline underline-offset-8">
                  Get Directions
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
