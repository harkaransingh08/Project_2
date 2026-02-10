import React, { useState, useEffect } from 'react';
import { 
  FaFacebook, FaInstagram, FaYoutube, FaChevronDown, FaHome, 
  FaGraduationCap, FaServicestack, FaInfoCircle, FaBlog, 
  FaGlobeAmericas, 
} from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const MenuData = [
    { name: 'Home', link: '/', icon: <FaHome className="text-amber-500" /> },
    {
      name: 'Education',
      icon: <FaGraduationCap className="text-amber-500" />,
      dropDown: [
        { name: 'Australian Study Visa', link: '/study-visa/australia', icon: <FaGlobeAmericas /> },
        { name: 'Singapore Study Visa', link: '/study-visa/singapore', icon: <FaGlobeAmericas /> },
        { name: 'Canada Study Visa', link: '/study-visa/canada', icon: <FaGlobeAmericas /> },
        { name: 'USA Study Visa', link: '/study-visa/usa', icon: <FaGlobeAmericas /> },
        { name: 'UK Study Visa', link: '/study-visa/uk', icon: <FaGlobeAmericas /> },
        { name: 'Europe Study Visa', link: '/study-visa/europe', icon: <FaGlobeAmericas /> },
      ],
    },
    { name: 'Services', link: '/student-services', icon: <FaServicestack className="text-amber-500" /> },
    { name: 'About', link: '/about-us', icon: <FaInfoCircle className="text-amber-500" /> },
    { name: 'Blog', link: '/blog', icon: <FaBlog className="text-amber-500" /> },
  ];

  const SocialMedia = [
    { name: 'Facebook', icon: <FaFacebook />, link: '', hover: 'hover:text-[#1877F2]' },
    { name: 'Instagram', icon: <FaInstagram />, link: '', hover: 'hover:text-[#DD2A7B]' },
    { name: 'YouTube', icon: <FaYoutube />, link: '', hover: 'hover:text-[#FF0000]' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-0'
        }`}
      >
        <div className="w-full">
          <nav className={`relative flex items-center justify-between px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled 
              ? 'mx-4 lg:mx-12 mt-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl' 
              : 'mx-0 bg-slate-900/40 backdrop-blur-md border-b border-white/5'
          }`}>
            
            {/* Logo */}
            <div className="relative z-50 flex items-center">
              <Link to="/" className="group flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dxrsaxq1d/image/upload/v1770742055/ChatGPT_Image_Feb_10_2026_10_17_29_PM_aj4imb.png"
                  alt="Logo"
                  className="h-10 lg:h-14 w-auto brightness-110"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-2 relative z-10">
              {MenuData.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={item.link || "#"}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-100 hover:text-amber-500 transition-all"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                    {item.dropDown && <FaChevronDown size={10} className="group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {item.dropDown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {item.dropDown.map((sub, i) => (
                        <Link key={i} to={sub.link} className="flex items-center gap-3 p-3 text-sm text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-lg">
                          {sub.icon} {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side: Theme Toggle & Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 relative z-50">
              {/* Desktop Socials */}
              <div className="hidden lg:flex items-center gap-5 border-r border-white/20 pr-6 mr-2">
                {SocialMedia.map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" rel="noreferrer" className={`text-slate-300 text-xl transition-all ${social.hover}`}>
                    {social.icon}
                  </a>
                ))}
              </div>

             
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden p-2 sm:p-2.5 text-white bg-white/10 rounded-xl border border-white/10"
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay - Fixed position to cover screen */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ marginTop: '0' }}
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu Panel - Slides from top */}
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                className={`absolute top-0 left-0 right-0 mt-0 mx-4 rounded-b-2xl border border-white/10 shadow-2xl overflow-hidden ${
                  isDarkMode 
                    ? 'bg-slate-900/95 backdrop-blur-2xl' 
                    : 'bg-white/95 backdrop-blur-2xl'
                }`}
                style={{ marginTop: scrolled ? '4.5rem' : '5.5rem' }} // Adjust based on header height
              >
                <div className="p-4">
                  {/* Close button inside menu */}
                  <div className="flex justify-end mb-4">
                    <button 
                      onClick={() => setIsOpen(false)} 
                      className="p-2 text-white bg-white/10 rounded-lg"
                    >
                      <HiX size={24} />
                    </button>
                  </div>

                  {/* Menu Items */}
                  <ul className="space-y-2">
                    {MenuData.map((item, idx) => (
                      <li key={idx}>
                        <Link 
                          to={item.link || "#"} 
                          onClick={() => !item.dropDown && setIsOpen(false)}
                          className={`flex items-center justify-between p-3 text-lg font-bold rounded-xl ${
                            isDarkMode 
                              ? 'text-white hover:bg-white/5' 
                              : 'text-slate-900 hover:bg-black/5'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {item.icon} 
                            <span>{item.name}</span>
                          </div>
                          {item.dropDown && <FaChevronDown size={12} />}
                        </Link>
                        
                        {/* Dropdown items */}
                        {item.dropDown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="ml-8 space-y-1 overflow-hidden"
                          >
                            {item.dropDown.map((sub, i) => (
                              <Link 
                                key={i} 
                                to={sub.link} 
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 py-2.5 px-3 text-sm rounded-lg ${
                                  isDarkMode 
                                    ? 'text-slate-300 hover:bg-white/5' 
                                    : 'text-slate-600 hover:bg-black/5'
                                }`}
                              >
                                {sub.icon} 
                                <span>{sub.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Social Media Links */}
                  <div className="flex justify-center gap-8 py-6 border-t border-white/10 mt-6">
                    {SocialMedia.map((social, idx) => (
                      <a 
                        key={idx} 
                        href={social.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`text-2xl transition-transform hover:scale-110 ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-16 lg:h-20" /> 
    </>
  );
}