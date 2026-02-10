import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Calendar, Globe, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const BLOGS = [
  {
    id: "canada-pr-2026",
    title: "Canada PR: The 2026 Strategy",
    desc: "Understand the new category-based selection for healthcare and STEM professionals in the latest Express Entry draws.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    date: "Jan 24, 2026",
    category: "Migration",
    country: "Canada"
  },
  {
    id: "uk-graduate-visa",
    title: "UK Graduate Visa Roadmap",
    desc: "A step-by-step guide for international students to transition from Tier 4 to a 2-year post-study work permit.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    date: "Jan 22, 2026",
    category: "Education",
    country: "United Kingdom"
  },
  {
    id: "australia-skilled-work",
    title: "Australia Subclass 190 Explained",
    desc: "How state nomination works in 2026 and which regional areas are currently offering the fastest PR processing.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    date: "Jan 20, 2026",
    category: "Work Visa",
    country: "Australia"
  },
  {
    id: "new-zealand-green-list",
    title: "NZ Green List Occupations",
    desc: "Direct-to-residence pathways for engineers and IT professionals under the latest New Zealand immigration rules.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    date: "Jan 18, 2026",
    category: "Residency",
    country: "New Zealand"
  },
  {
    id: "germany-chancenkarte",
    title: "Germany Opportunity Card Guide",
    desc: "How to use the points-based system to search for a job in Germany for up to one year without a prior offer.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    date: "Jan 15, 2026",
    category: "Job Search",
    country: "Germany"
  },
  {
    id: "dubai-golden-visa",
    title: "Dubai Golden Visa Benefits",
    desc: "A look at the long-term residency options for investors, entrepreneurs, and extraordinary talents in the UAE.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    date: "Jan 12, 2026",
    category: "Investment",
    country: "UAE"
  },
  {
    id: "ireland-critical-skills",
    title: "Ireland Critical Skills Permit",
    desc: "Why Ireland is becoming the top tech destination for software developers and data scientists in 2026.",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80",
    date: "Jan 10, 2026",
    category: "Employment",
    country: "Ireland"
  },
  {
    id: "singapore-one-pass",
    title: "Singapore ONE Pass Strategy",
    desc: "High-level overview of the Overseas Networks and Expertise (ONE) Pass for top-tier global talent.",
    image: "https://cdn.pixabay.com/photo/2017/07/31/06/20/singapore-2556628_1280.jpg",
    date: "Jan 08, 2026",
    category: "Talent Visa",
    country: "Singapore"
  }
];


export default function Blogs() {
  return (
    <div className="bg-white py-30 md:py-35 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-20 gap-6 border-b border-white/10 pb-10 text-center md:text-left">
          <div className="w-full">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center md:justify-start gap-3 text-[#FF8C1A] font-bold mb-4"
            >
              <Globe size={18} className="animate-pulse" />
              <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs">Migration Planet Intelligence</span>
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black text-black tracking-tighter leading-[0.9]">
              GLOBAL <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C1A] to-orange-300 italic">CAREER BLOGS</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-xs md:text-sm leading-relaxed">
            Stay updated with the latest visa policies and migration trends curated by our experts for 2026.
          </p>
        </div>

        {/* The Swiper Section */}
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            // On very small mobile
            320: { 
              slidesPerView: 1.1, // Shows a peek of the next slide
              spaceBetween: 20 
            },
            // On tablets
            768: { 
              slidesPerView: 2,
              spaceBetween: 30 
            },
            // On desktop
            1024: { 
              slidesPerView: 3,
              spaceBetween: 40 
            },
          }}
          className="pb-16 md:pb-24 !overflow-visible"
        >
          {BLOGS.map((blog) => (
            <SwiperSlide key={blog.id} className="w-full max-w-[320px] sm:max-w-[400px]">
              <div className="group bg-[#1f1f1f]/50 backdrop-blur-xl rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl h-full flex flex-col hover:border-[#FF8C1A]/30 transition-all duration-500">
                
                {/* Image Area - Scaled for mobile */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-[#FF8C1A] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-xl">
                      {blog.category}
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-white/80 text-[9px] flex items-center gap-1.5 px-3 py-1 rounded-full uppercase tracking-widest w-fit border border-white/10">
                      <Clock size={10} /> {blog.readTime}
                    </span>
                  </div>
                </div>

                {/* Content Area - Adjusted padding for mobile */}
                <div className="p-6 md:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[#FF8C1A] text-[9px] font-bold uppercase tracking-widest mb-3">
                    <Calendar size={12} /> {blog.date} 
                    <span className="text-white/20">|</span> 
                    <span className="text-white">{blog.country}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#FF8C1A] transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {blog.desc}
                  </p>
                  
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="flex items-center justify-between pt-5 border-t border-white/5 text-white group/btn"
                  >
                    <span className="flex items-center gap-2 uppercase text-[10px] font-black tracking-widest group-hover/btn:text-[#FF8C1A] transition-colors">
                      <BookOpen size={14} className="text-[#FF8C1A]"/> Read More
                    </span>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF8C1A] text-white flex items-center justify-center group-hover/btn:rotate-[-45deg] transition-all duration-300">
                       <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet { background: #FF8C1A !important; opacity: 0.2; width: 8px; height: 4px; border-radius: 2px; transition: all 0.4s; }
        .swiper-pagination-bullet-active { opacity: 1; width: 30px; }
        @media (max-width: 768px) {
          .swiper-pagination { bottom: 0px !important; }
        }
      `}} />
    </div>
  );
}