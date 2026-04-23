import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter, Clock, Star } from 'lucide-react';
import { BUSINESS_INFO, NAVIGATION_LINKS } from '../../constants/data';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
                <span className="text-blue-900 font-bold text-xl">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white">NEEDS</span>
                <span className="font-medium text-xs tracking-widest text-yellow-400">MARKET</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the Barsha Heights community with fresh groceries, daily essentials, and premium service 24 hours a day, 7 days a week.
            </p>
            <div className="flex items-center space-x-2 text-yellow-400">
               <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                <Star size={14} />
              </div>
              <span className="text-sm font-bold text-white">{BUSINESS_INFO.rating} ({BUSINESS_INFO.reviewsCount} Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Contact Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-yellow-400 shrink-0" size={18} />
                <span>{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-yellow-400 shrink-0" size={18} />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="text-yellow-400 shrink-0" size={18} />
                <span>{BUSINESS_INFO.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all">
                <Twitter size={20} />
              </a>
            </div>
            <div className="p-4 bg-blue-900/50 rounded-xl border border-blue-800">
              <p className="text-xs text-yellow-400 font-bold mb-2 uppercase tracking-wider">Arabic Support Available</p>
              <p className="text-[10px] text-gray-300">نحن نتحدث العربية والإنجليزية لخدمتكم بشكل أفضل.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
