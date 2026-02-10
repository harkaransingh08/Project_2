import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGraduationCap, FaPassport, FaHome, FaUniversity, 
  FaArrowLeft, FaArrowRight, FaMapMarkerAlt, 
  FaClock, FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaLeaf 
} from 'react-icons/fa';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CanadaStudy() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const { country } = useParams();
  const [filter, setFilter] = useState('All');

  const universities = [
  {
    name: "University of Toronto",
    placement: "96%",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
    location: "Toronto, ON",
    rank: "Global #21",
    province: "ON"
  },
  {
    name: "McGill University",
    placement: "94%",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80",
    location: "Montreal, QC",
    rank: "Global #30",
    province: "QC"
  },
  {
    name: "University of British Columbia",
    placement: "93%",
    image: "https://wallpapercave.com/wp/wp10285650.jpg",
    location: "Vancouver, BC",
    rank: "Global #34",
    province: "BC"
  },
  {
    name: "University of Waterloo",
    placement: "97%",
    image: "https://uwaterloo.ca/support/sites/default/files/uploads/images/c007222_main_entrance-1680x1050-wallpaper.jpg",
    location: "Waterloo, ON",
    rank: "Global #112",
    province: "ON"
  },
  {
    name: "McMaster University",
    placement: "92%",
    image: "https://www.igniteastar.com/wp-content/uploads/2023/09/20180706-152629-McMaster-University-Campus-0004-1-1.jpg",
    location: "Hamilton, ON",
    rank: "Global #103",
    province: "ON"
  },
  {
    name: "University of Alberta",
    placement: "91%",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80",
    location: "Edmonton, AB",
    rank: "Global #91",
    province: "AB"
  },
  {
    name: "Université de Montréal",
    placement: "90%",
    image: "https://cms.macleans.ca/wp-content/uploads/2019/04/Montreal-University-Ranking-Tuition-Profile-Macleans.jpg",
    location: "Montreal, QC",
    rank: "Global #141",
    province: "QC"
  },
  {
    name: "Western University",
    placement: "90%",
    image: "https://brand.westernu.ca/assets/img/assets/wallpaper/uc-tower-summer.png",
    location: "London, ON",
    rank: "Global #114",
    province: "ON"
  }
];


  const filteredUnis = filter === 'All' ? universities : universities.filter(u => u.province === filter);

  const handleProvinceClick = (code) => {
    setFilter(code);
    document.getElementById('uni-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="bg-[#080808] text-white min-h-screen selection:bg-[#E31837] selection:text-white font-inter antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[91vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769624192/canada_yhymmh.jpg" className="w-full h-full object-cover scale-105" alt="Canada" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#E31837] font-semibold tracking-[0.5em] uppercase text-[10px] mb-6 block flex items-center gap-2">
              <FaLeaf className="text-xs" /> 2026 Academic Season
            </span>
            <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] mb-8 tracking-tight">Canada <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white/70">Awaits.</span></h1>
            <p className="max-w-md text-gray-400 text-sm md:text-base mb-10 leading-relaxed font-normal">Strategic placement in North America's most inclusive educational landscape. Navigate PR pathways and world-renowned research hubs.</p>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => document.getElementById('uni-section').scrollIntoView({behavior: 'smooth'})} className="bg-[#E31837] text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-red-500/10">View Universities</button>
              <button onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'})} className="bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Start Application</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROVINCE FILTERS */}
      <section className="py-12 bg-white border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'ON', 'BC', 'QC', 'AB'].map((prov) => (
                <button 
                  key={prov}
                  onClick={() => handleProvinceClick(prov)}
                  className={`px-8 py-2 rounded-full border transition-all duration-500 font-bold text-[10px] tracking-widest ${filter === prov ? 'bg-white text-black border-white' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
                >
                  {prov === 'All' ? 'ALL PROVINCES' : prov}
                </button>
              ))}
            </div>
        </div>
      </section>

      {/* 3. UNIVERSITY SWIPER */}
      <section id="uni-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[#E31837] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Top Institutions</h2>
              <h3 className="text-4xl font-medium tracking-tight">Global <span className="text-[#E31837]">Rankings</span></h3>
            </div>
            <div className="flex gap-3">
              <button className="swiper-prev-btn w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#E31837] hover:text-white transition-all text-sm"><FaArrowLeft /></button>
              <button className="swiper-next-btn w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#E31837] hover:text-white transition-all text-sm"><FaArrowRight /></button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{ nextEl: '.swiper-next-btn', prevEl: '.swiper-prev-btn' }}
                pagination={{ clickable: true }}
                breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
                className="pb-20"
              >
                {filteredUnis.map((uni, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-[#111] rounded-[2rem] select-none overflow-hidden border border-white/5 group transition-all duration-500 h-[500px] flex flex-col">
                      <div className="relative h-56 overflow-hidden shrink-0">
                        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                        <div className="absolute top-5 left-5 bg-[#E31837] text-white text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">{uni.rank}</div>
                      </div>
                      <div className="p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex justify-between items-center mb-4 text-[10px]">
                            <span className="flex items-center gap-2 text-gray-500 font-semibold tracking-wider"><FaMapMarkerAlt className="text-[#E31837]" /> {uni.location}</span>
                            <span className="text-white/40 font-bold tracking-widest">{uni.placement} SUCCESS</span>
                          </div>
                          <h4 className="text-xl font-medium mb-3 tracking-tight">{uni.name}</h4>
                        </div>
                        <button className="w-full py-4 rounded-xl border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Program Guide</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. VISA & PATHWAYS */}
      <section className="py-24 bg-white    border-y border-black">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[#E31837] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Canadian Edge</h2>
            <h3 className="text-4xl text-black font-medium mb-10 tracking-tight">Study <span className="text-[#E31837]">Permit</span></h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <FaPassport />, title: "SDS Pathway", desc: "Fast-track processing for 7 countries" },
                { icon: <FaHome />, title: "GIC Requirement", desc: "CAD 20,635+ cost of living proof" },
                { icon: <FaUniversity />, title: "PGWP", desc: "Up to 3-year work permit after study" },
                { icon: <FaGraduationCap />, title: "PR Points", desc: "Bonus CRS points for Canadian degree" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-red-500/20   rounded-2xl border border-black hover:border-red-500/20 transition-all">
                  <div className="text-[#E31837] text-2xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-black text-sm mb-1 tracking-tight">{item.title}</h4>
                  <p className="text-back text-xs text-black font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-10 border-l border-black">
            <h3 className="text-2xl font-medium mb-10 text-black tracking-tight">Enrollment <span className="text-[#E31837]">Cycle</span></h3>
            {[
              { time: "Fall Intake", title: "September Start", text: "Primary intake. Applications open 10-12 months prior." },
              { time: "Winter Intake", title: "January Start", text: "Secondary intake. Limited availability for certain majors." },
              { time: "Documentation", title: "PAL Requirement", text: "New 2026 Provincial Attestation Letter compliance." }
            ].map((step, i) => (
              <div key={i} className="mb-10 relative">
                <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-[#080808] border-2 border-[#E31837]" />
                <span className="text-[#E31837] font-bold text-[9px] uppercase tracking-widest mb-1 block">{step.time}</span>
                <h4 className="text-lg font-medium mb-1 text-black tracking-tight">{step.title}</h4>
                <p className="text-black text-xs leading-relaxed max-w-xs font-normal">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#111] rounded-[3rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-3xl">
            <div className="lg:w-1/3 bg-[#E31837] p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-medium mb-6 tracking-tight leading-none">Your Future <br/>North.</h3>
                <p className="text-sm font-medium opacity-70 leading-relaxed mb-10">Our consultants specialize in the 2026 SDS and non-SDS visa categories.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm"><FaEnvelope /></div>
                    <span className="text-sm font-bold tracking-tight">harkaransingh08ktl@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm"><FaPhoneAlt /></div>
                    <span className="text-sm font-bold tracking-tight">+91 9416384630</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-12">
                <FaInstagram className="opacity-70 hover:opacity-100 cursor-pointer" />
                <FaLinkedin className="opacity-70 hover:opacity-100 cursor-pointer" />
              </div>
            </div>

            <div className="lg:w-2/3 p-12 lg:p-20 bg-[#0c0c0c]">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Legal Name</label>
                  <input type="text" placeholder="Harkaran Singh" className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#E31837] outline-none transition-all placeholder:text-white/30 " />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Email</label>
                  <input type="email" placeholder="harkaransingh@gmail.com" className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#E31837] outline-none transition-all placeholder:text-white/30" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Preferred Province</label>
                  <select className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#E31837] outline-none text-gray-400 appearance-none">
                    <option>Select destination...</option>
                    <option>Ontario (ON)</option>
                    <option>British Columbia (BC)</option>
                    <option>Quebec (QC)</option>
                  </select>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-[#E31837] hover:text-white transition-all">Request Assessment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#080808] text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold mb-4">© 2026 Canada Scholar Portal</p>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #080808; }
        .swiper-pagination-bullet { background: #333 !important; opacity: 1 !important; width: 6px; height: 6px; }
        .swiper-pagination-bullet-active { background: #E31837 !important; width: 24px; border-radius: 3px; }
        select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.2)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1.25rem center; background-size: 1rem; }
      `}</style>
    </main>
  );
}