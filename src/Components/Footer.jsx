import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Separate array for Social Media Links
  const socialLinks = [
    { id: 1, name: 'Facebook', icon: <FaFacebookF />, url: 'https://facebook.com' },
    { id: 2, name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { id: 3, name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
    { id: 4, name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
  ];

  // Separate array for Destinations (to keep the JSX clean)
  const destinations = [
    'Australia', 'Canada', 'United Kingdom', 'USA', 'Europe'
  ];

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
           <img className='h-20 bg-[#FF8C1A] rounded-2xl' src="https://res.cloudinary.com/dxrsaxq1d/image/upload/v1770742055/ChatGPT_Image_Feb_10_2026_10_17_29_PM_aj4imb.png" alt="" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering dreams of global education. We provide expert guidance and seamless visa processing for students worldwide.
            </p>
            
            {/* Using the new socialLinks array */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.id} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF8C1A] transition-all duration-300 text-gray-400 hover:text-white"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#FF8C1A] pl-3">Destinations</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {destinations.map((item) => (
                <li key={item}>
                  <a href={`/study-visa/${item.toLowerCase()}`} className="hover:text-[#FF8C1A] transition-colors duration-300 flex items-center gap-2">
                    Study in {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#FF8C1A] pl-3">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FF8C1A] mt-1 shrink-0" />
                <span> Kaithal, Haryana 136027</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF8C1A] shrink-0" />
                <span>+91 9416384630</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF8C1A] shrink-0" />
                <span>harkaransingh08ktl@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-[#FF8C1A] pl-3">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with the latest visa policies and intakes.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#FF8C1A] transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1.5 bg-[#FF8C1A] text-white px-4 py-1.5 rounded-md text-xs font-bold hover:bg-orange-600 transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}