import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Plane, 
  TrendingUp, 
  Phone 
} from 'lucide-react';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const features = [
  { icon: <Target className="w-5 h-5" />, title: "Precision", desc: "Tailored roadmaps for every student." },
  { icon: <Users className="w-5 h-5" />, title: "Community", desc: "Join 5,000+ global alumni." },
  { icon: <Award className="w-5 h-5" />, title: "Integrity", desc: "Transparency in every document." },
  { icon: <Zap className="w-5 h-5" />, title: "Speed", desc: "Optimized processing timelines." },
];




const stats = [
  { id: 1, icon: <Users className="w-8 h-8 text-orange-500" />, value: "700+", label: "Happy Families" },
  { id: 2, icon: <ShieldCheck className="w-8 h-8 text-orange-500" />, value: "15+", label: "Years of Trust" },
  { id: 3, icon: <Globe className="w-8 h-8 text-orange-500" />, value: "15+", label: "Countries Represented" },
  { id: 4, icon: <Plane className="w-8 h-8 text-orange-500" />, value: "25K+", label: "Visa Delivery" },
  { id: 5, icon: <TrendingUp className="w-8 h-8 text-orange-500" />, value: "95%", label: "Success Rate" },
];

export default function About() {
  return (
    <div className="font-inter antialiased bg-white text-white">
      {/* SECTION 1: IDENTITY & SLIDER */}
      <section className="py-20 md:py-32 px-6 overflow-hidden border-t border-white/5 bg-white">
        <div className="container mx-auto">
          {/* Changed grid-cols to 10 for exact 60/40 split */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20 items-center">
            
            {/* LEFT SIDE: Content (60%) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-6 relative"
            >
              <motion.span 
                variants={fadeInUp}
                className="text-[#FF8C1A] font-semibold tracking-[0.5em] uppercase text-[10px] mb-6 block"
              >
                Our Identity
              </motion.span>
              
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-7xl text-black font-medium leading-[1.1] tracking-tight mb-8"
              >
                Legacy of <br />
                <span className="text-orange-500  bg-clip-text  bg-gradient-to-r from-orange-500 to-white/50">Trust.</span>
              </motion.h2>
              
              <motion.div 
                variants={fadeInUp}
                className="relative mt-8 md:mt-12 p-6 md:p-10 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-2xl z-10 overflow-hidden shadow-2xl"
              >
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-normal mb-8">
                  We aren't just consultants; we are architects of futures. With over a decade of 
                  navigating international law, we've turned the complex visa maze into a 
                  seamless journey for thousands of ambitious minds.
                </p>
                
                <motion.div 
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {features.map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="group cursor-default">
                      <div className="text-[#FF8C1A] mb-3 group-hover:scale-125 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <h4 className="text-sm font-bold tracking-tight mb-1 group-hover:text-orange-400 transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-[11px] leading-snug">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <div className="flex items-center gap-8 pl-4 mt-12 group cursor-pointer">
                <motion.div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent group-hover:from-orange-500 transition-all duration-500" />
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF8C1A] group-hover:text-white transition-colors">
                  View Credentials —
                </button>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Swiper Section (40%) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 relative group w-full"
            >
              <div className="absolute -inset-4 bg-orange-600/10 blur-3xl rounded-full opacity-50" />

              <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 relative shadow-2xl bg-neutral-900">
                <Swiper
                  modules={[Autoplay, EffectFade, Pagination]}
                  effect="fade"
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  className="h-full w-full"
                >

                </Swiper>

                {/* Info Overlay */}
                <div className="absolute bottom-10 left-10 z-20 pointer-events-none">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-6 bg-orange-500 animate-pulse"></span>
                    <p className="text-[#FF8C1A] font-bold text-[9px] tracking-[0.4em] uppercase">Since 2014</p>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-white leading-tight">
                    Authorized <br /> Global Partners.
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Your Trusted <span className="text-orange-500">Visa Partner</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Expert guidance for your seamless migration journey.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <motion.div 
                key={stat.id} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-3xl transition-all duration-300"
              >
                <div className="mb-4 bg-[#1a1a1a] p-3 rounded-2xl">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-black">{stat.value}</h3>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}