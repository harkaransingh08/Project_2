import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGraduationCap, FaPassport, FaBuilding, FaUniversity, 
  FaArrowLeft, FaArrowRight, FaMapMarkerAlt, 
  FaGlobeAsia, FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaBriefcase 
} from 'react-icons/fa';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SingaporeStudy() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const { country } = useParams();
  const [filter, setFilter] = useState('All');

  const universities = [
    { name: "National University of Singapore (NUS)", placement: "95%", image: "https://wallpapercave.com/wp/wp13512472.jpg", location: "Lower Kent Ridge", rank: "Global #8", type: "National" },
    { name: "Nanyang Technological University (NTU)", placement: "94%", image: "https://vcdn1-vnexpress.vnecdn.net/2025/12/22/the-hive-ntu-singapore5e96d95f-2963-4086-1766378686.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=N23ZXMBU0UddtbZ_O_G2wg", location: "Jurong West", rank: "Global #15", type: "National" },
    { name: "Singapore Management University (SMU)", placement: "93%", image: "https://www.smu.edu.sg/sites/default/files/campus-life/smu.jpg", location: "Downtown Core", rank: "Top 50 Business", type: "National" },
    { name: "SIM Global Education", placement: "88%", image: "https://simge-sl.project.manuscript.com.sg/wp-content/uploads/2022/06/SIM-Clementi-Facilities_EK2_2208_Final-scaled.jpg", location: "Clementi", rank: "Pvt Tier 1", type: "Private" },
    { name: "PSB Academy", placement: "86%", image: "https://www.aecoverseas.com/wp-content/uploads/2023/09/PSB-2.jpg", location: "Marina Bay", rank: "The Future Academy", type: "Private" },
  ];

  const filteredUnis = filter === 'All' ? universities : universities.filter(u => u.type === filter);

  return (
    <main className="bg-[#0A0A0B] text-white min-h-screen selection:bg-[#EF3340] selection:text-white font-inter antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[91vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769624810/singapore_egb4kr.jpg" className="w-full h-full object-cover  scale-105" alt="Singapore" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#EF3340] font-semibold tracking-[0.5em] uppercase text-[10px] mb-6 block flex items-center gap-2">
              <FaGlobeAsia className="text-xs" /> Global Innovation Hub 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] mb-8 tracking-tight">The Lion <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF3340] to-white/70">City.</span></h1>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => document.getElementById('uni-section').scrollIntoView({behavior: 'smooth'})} className="bg-[#EF3340] text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-red-600/20">View Institutions</button>
              <button onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'})} className="bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Student Pass Help</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="py-12 bg-white border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {['All', 'National', 'Private'].map((type) => (
                <button 
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-10 py-2 rounded-full border transition-all duration-500 font-bold text-[10px] tracking-widest ${filter === type ? 'bg-[#EF3340] text-white border-[#EF3340]' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
                >
                  {type === 'All' ? 'ALL ACADEMIES' : `${type.toUpperCase()} UNIVERSITIES`}
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
              <h2 className="text-[#EF3340] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Asian Tiger Rankings</h2>
              <h3 className="text-4xl font-medium text-black tracking-tight">Academic <span className="text-[#EF3340]">Powerhouses</span></h3>
            </div>
            <div className="flex gap-3">
              <button className="swiper-prev-btn w-12 h-12 rounded-full border border-white/5 flex items-center bg-black justify-center hover:bg-[#EF3340] transition-all text-sm"><FaArrowLeft /></button>
              <button className="swiper-next-btn w-12 h-12 rounded-full border border-white/5 flex items-center  bg-black justify-center hover:bg-[#EF3340] transition-all text-sm"><FaArrowRight /></button>
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
                    <div className="bg-[#141416] rounded-[2rem] select-none overflow-hidden border border-white/5 group transition-all duration-500 h-[500px] flex flex-col">
                      <div className="relative h-56 overflow-hidden shrink-0">
                        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                        <div className="absolute top-5 left-5 bg-[#EF3340] text-white text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">{uni.rank}</div>
                      </div>
                      <div className="p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex justify-between items-center mb-4 text-[10px]">
                            <span className="flex items-center gap-2 text-gray-500 font-semibold tracking-wider"><FaMapMarkerAlt className="text-[#EF3340]" /> {uni.location}</span>
                            <span className="text-white/40 font-bold tracking-widest">{uni.placement} JOB RATE</span>
                          </div>
                          <h4 className="text-xl font-medium mb-3 tracking-tight">{uni.name}</h4>
                        </div>
                        <button className="w-full py-4 rounded-xl border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Curriculum Details</button>
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
      <section className="py-24 bg-white border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[#EF3340] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">ICA Regulations</h2>
            <h3 className="text-4xl font-medium mb-10 text-black tracking-tight">Student <span className="text-[#EF3340]">Pass (STP)</span></h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <FaPassport />, title: "SOLAR+ System", desc: "Digital Student Pass application portal" },
                { icon: <FaBriefcase />, title: "Work Rights", desc: "16 hours/week (Only for National Unis)" },
                { icon: <FaBuilding />, title: "Tuition Grant", desc: "MOE subsidies in exchange for 3-year bond" },
                { icon: <FaUniversity />, title: "E-Pass Pathway", desc: "Smooth transition to professional work passes" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-red-500/20 transition-all">
                  <div className="text-[#EF3340] text-2xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-sm mb-1 tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 text-xs font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-10 border-l border-black  ">
            <h3 className="text-2xl font-medium mb-10 text-black tracking-tight">Singapore <span className="text-[#EF3340]">Cycle</span></h3>
            {[
              { time: "Intake 1", title: "August Commencement", text: "Primary intake for National Universities. Deadline: Jan-Feb." },
              { time: "Intake 2", title: "January Commencement", text: "Secondary intake. Common for Postgraduate and Private degrees." },
              { time: "Medical", title: "In-Principle Approval", text: "Required medical check-up upon arrival for STP issuance." }
            ].map((step, i) => (
              <div key={i} className="mb-10 relative">
                <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-[#EF3340]" />
                <span className="text-[#EF3340] font-bold text-[9px] uppercase tracking-widest mb-1 block">{step.time}</span>
                <h4 className="text-lg font-medium mb-1 tracking-tight">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xs font-normal">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact-section" className="py-24 bg-white ">
        <div className="container mx-auto px-6">
          <div className="bg-[#141416] rounded-[3rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-[#EF3340] p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-medium mb-6 tracking-tight leading-none">SG Study <br/>Consult.</h3>
                <p className="text-sm font-medium opacity-70 leading-relaxed mb-10">Speak with our Singapore-certified counselors about MOE Tuition Grants.</p>
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

            <div className="lg:w-2/3 p-12 lg:p-20 bg-[#0C0C0D]">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">Applicant Name</label>
                  <input type="text" placeholder="Kunal Bansal" className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#EF3340] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">Email Address</label>
                  <input type="email" placeholder="kunalbansal@gmail.com" className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#EF3340] outline-none transition-all" />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-[#EF3340] hover:text-white transition-all">Begin Consultation</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#0A0A0B] text-center border-t border-white/5">
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold">© 2026 Singapore Scholar Gateway</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #0A0A0B; }
        .swiper-pagination-bullet { background: #222 !important; opacity: 1 !important; }
        .swiper-pagination-bullet-active { background: #EF3340 !important; width: 24px; border-radius: 3px; }
      `}</style>
    </main>
  );
}