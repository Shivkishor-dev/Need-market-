import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Clock, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO, NAVIGATION_LINKS } from '../../constants/data';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-white shadow-md py-3" : "bg-transparent py-3 md:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-900 flex items-center justify-center rounded-lg shadow-lg">
              <span className="text-yellow-400 font-bold text-xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-xl leading-none",
                isScrolled || isOpen ? "text-blue-900" : "text-white"
              )}>
                NEEDS
              </span>
              <span className={cn(
                "font-medium text-xs tracking-widest",
                isScrolled || isOpen ? "text-yellow-600" : "text-yellow-400"
              )}>
                MARKET
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-yellow-500",
                  location.pathname === link.href 
                    ? "text-yellow-500" 
                    : (isScrolled ? "text-gray-700" : "text-white")
                )}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-blue-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all flex items-center space-x-2 shadow-lg"
            >
              <ShoppingCart size={18} />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
             <div className={cn(
              "flex items-center space-x-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase border",
              isScrolled ? "border-blue-900 text-blue-900" : "border-yellow-400 text-yellow-400"
            )}>
              <Clock size={12} />
              <span>24/7 OPEN</span>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-1 rounded-md",
                isScrolled || isOpen ? "text-blue-900" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-bold rounded-lg transition-colors",
                    location.pathname === link.href 
                      ? "bg-blue-50 text-blue-900" 
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center space-x-2 bg-blue-900 text-white py-4 rounded-xl font-bold"
                >
                  <Phone size={18} />
                  <span>Call</span>
                </a>
                <a 
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  className="flex items-center justify-center space-x-2 bg-yellow-400 text-blue-900 py-4 rounded-xl font-bold shadow-md shadow-yellow-200"
                >
                  <ShoppingCart size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
