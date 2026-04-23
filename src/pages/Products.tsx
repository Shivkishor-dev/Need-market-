import { motion } from 'motion/react';
import { ShoppingCart, Search, ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES, BUSINESS_INFO } from '../constants/data';

export default function Products() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-blue-900 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Our Inventory</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">Product Categories</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              Explore our wide range of groceries and essentials. Order via WhatsApp for fast delivery in Barsha Heights.
            </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCT_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                   <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-950 mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-8 h-12 overflow-hidden">{category.description}</p>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to check products in ${category.name}`}
                    className="flex items-center justify-between text-blue-900 font-bold group-hover:text-yellow-600 transition-colors"
                  >
                    <span className="flex items-center space-x-2">
                       <ShoppingCart size={18} />
                       <span>Inquire via WhatsApp</span>
                    </span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-blue-950 mb-6">Can't find what you are looking for?</h2>
           <p className="text-gray-600 mb-10 max-w-xl mx-auto">Our inventory changes daily. Give us a call or message us on WhatsApp and we'll check if it's in stock.</p>
           <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center space-x-3 bg-blue-900 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl"
            >
              <span>Call Us Now</span>
            </a>
        </div>
      </section>
    </div>
  );
}
