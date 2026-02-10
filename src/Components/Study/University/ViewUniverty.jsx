import React, { useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useParams, useLocation } from 'react-router-dom';
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ClockIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import your Data
import { UniData } from './Data.jsx';

export default function ViewUniversity() {
  const { univerty_name } = useParams();
  const { pathname } = useLocation();
  const contentRef = useRef(null);

  // 1. FIND THE ACTIVE UNIVERSITY
  const activeUni = useMemo(() => {
    return UniData.find(u => u.Slug === univerty_name) || UniData[0];
  }, [univerty_name]);

  // 2. AUTO SCROLL TO TOP ON ROUTE CHANGE
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // 3. HANDLER FOR EXPLORE BUTTON
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!activeUni) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">University Not Found</h1>
          <p className="text-slate-400">The institution you are looking for does not exist in our database.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Overlays for readability */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
        <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-950 via-slate-950/20 to-transparent" />
        
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={activeUni.bannerImgh}
          className="w-full h-full object-cover"
          alt={activeUni.name}
        />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold tracking-widest uppercase mb-6"
              >
                Global Education Partner
              </motion.span>
              
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
                {activeUni.name.split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-400 to-yellow-500">
                  {activeUni.name.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light mb-10 max-w-2xl">
                {activeUni.shortDes}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToContent}
                  className="group flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-full font-bold transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20"
                >
                  Explore Campus <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 cursor-pointer group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-amber-500 transition-colors">Scroll</span>
            <div className="w-[1px] h-12 bg-linear-to-b from-amber-500 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section ref={contentRef} className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                {activeUni.title}
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-slate-300 leading-relaxed italic border-l-4 border-amber-500 pl-8 py-2 bg-white/5 rounded-r-2xl">
                  {activeUni.des}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="text-amber-500 font-black text-3xl mb-1">Global</p>
                    <p className="text-slate-400 font-medium">Top Tier Institution</p>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="text-amber-500 font-black text-3xl mb-1">90%+</p>
                    <p className="text-slate-400 font-medium">Career Placement</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-amber-500/20 blur-[50px] rounded-[3rem]" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src={activeUni.titleImg} alt="Academic Excellence" className="w-full h-[600px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COURSES SECTION --- */}
      <section className="py-32 bg-slate-900/40 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Academic Programs</h2>
            <div className="h-1 w-24 bg-amber-500 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeUni.course.map((course, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -12, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                className="group p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 hover:border-amber-500/30 transition-all duration-500"
              >
                <div className={`w-16 h-16 bg-linear-to-br ${course.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform`}>
                  <course.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{course.name}</h3>
                <div className="flex items-center gap-3 text-slate-400 font-semibold bg-white/5 w-fit px-4 py-2 rounded-full">
                  <ClockIcon className="w-5 h-5 text-amber-500" /> {course.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEES SECTION --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {activeUni.fee.map((fee, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative p-[1px] rounded-[2.5rem] bg-linear-to-b from-white/20 to-transparent"
              >
                <div className="bg-slate-950 p-12 rounded-[2.45rem] h-full border border-white/5">
                  <fee.icon className="w-12 h-12 text-amber-500 mb-8" />
                  <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 font-black mb-4">{fee.level}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{fee.price}</div>
                  <p className="text-slate-400 font-medium mb-10">{fee.period}</p>
                  
                  <div className="pt-8 border-t border-white/10">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircleIcon className="w-5 h-5 text-amber-500" /> Scholarship Options Available
                      </li>
                      <li className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircleIcon className="w-5 h-5 text-amber-500" /> Flexible Payment Plans
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAMPUS GALLERY --- */}
      <section className="py-32 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl"
          >
            {activeUni.CampusImg.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/20 z-10" />
                  <img src={img} className="w-full h-[700px] object-cover transition-transform duration-[10s] group-hover:scale-110" alt="Campus environment" />
                  <div className="absolute bottom-20 left-20 z-20">
                    <motion.h4 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-white text-4xl font-black mb-2"
                    >
                      World-Class Environment
                    </motion.h4>
                    <p className="text-amber-500 text-xl font-medium tracking-wide">Excellence in every corner.</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[4rem] bg-linear-to-br from-slate-900 to-slate-950 border border-white/10 p-12 md:p-20 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Why Join {activeUni.name}?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {activeUni.benefit.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="mt-1 bg-amber-500 text-black p-1.5 rounded-lg transform group-hover:rotate-12 transition-transform">
                      <CheckCircleIcon className="w-6 h-6" />
                    </div>
                    <span className="text-slate-300 text-xl font-light leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-40 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <h3 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">Start Your Future <br/> Today.</h3>
          <button className="relative group overflow-hidden bg-white text-black px-12 py-6 rounded-full font-black text-xl transition-all hover:pr-16 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <span className="relative z-10">Apply Now for 2026</span>
            <ArrowRightIcon className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all" />
          </button>
        </motion.div>
      </section>

    </div>
  );
}