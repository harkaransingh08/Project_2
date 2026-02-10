import React, { useState,useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGraduationCap, FaPassport, FaHome, FaUniversity, 
  FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaCheckCircle, 
  FaClock, FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin 
} from 'react-icons/fa';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from 'react-router-dom';
export default function AustraliaStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState('All');

  const universities = [
    { name: "University of Melbourne",link:'/university-of-melbourne', placement: "98%", image: "https://goldstareducation.com/wp-content/uploads/2023/09/university-of-melbourne.jpg", location: "Melbourne, VIC", rank: "Global #13", state: "VIC" },
    { name: "UNSW Sydney",link:'/unsw-sydney', placement: "97%", image: "https://media.istockphoto.com/id/459002685/photo/university-of-new-south-wales.jpg?s=612x612&w=0&k=20&c=ybOfw8pECEhQUyIdZJkG-t_QqEG1htdfiBgw2LLDxo0=", location: "Sydney, NSW", rank: "Global #19", state: "NSW" },
    { name: "University of Sydney",link:'/university-of-sydney', placement: "92%", image: "https://images.unsplash.com/photo-1567852701065-b2991a38e34c?fm=jpg&q=60&w=3000&auto=format&fit=crop", location: "Sydney, NSW", rank: "Global #18", state: "NSW" },
    { name: "Australian National University",link:'/australian-national-university', placement: "88%", image: "https://i0.wp.com/thecustodianau.com/wp-content/uploads/2023/06/Australian-National-University-3.jpg", location: "Canberra, ACT", rank: "Global #30", state: "ACT" },
    { name: "Monash University",link:'/monash-university', placement: "85%", image: "https://images.shiksha.com/mediadata/images/1533128219phpdgezPU.jpeg", location: "Melbourne, VIC", rank: "Global #37", state: "VIC" },
    { name: "University of Queensland",link:'/university-of-queensland', placement: "86%", image: "https://images.shiksha.com/mediadata/images/1533634003phpU487Ny_g.png", location: "Brisbane, QLD", rank: "Global #40", state: "QLD" },
    { name: "Univ. of Western Australia",link:'/univ-of-western-australia', placement: "82%", image: "https://static.wixstatic.com/media/2de6c5_43f32666b7c54f0dbd858878ba75c6fa~mv2.jpg", location: "Perth, WA", rank: "Global #72", state: "WA" },
    { name: "Adelaide University",link:'/adelaide-university', placement: "87%", image: "https://static.toiimg.com/thumb/msid-123015784,width-1280,height-720,resizemode-4/123015784.jpg", location: "Adelaide, SA", rank: "Global #82", state: "SA" },
  ];

  const filteredUnis = filter === 'All' ? universities : universities.filter(u => u.state === filter);

  const handleStateClick = (stateCode) => {
    setFilter(stateCode);
    document.getElementById('uni-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const statePaths = [
    { id: 'WA', name: 'Western Australia', d: "M278,206 L158,228 c-13,7 -28,17 -33,32 c-10,30 -20,80 -25,120 c-5,50 -2,100 0,150 c2,40 -10,80 5,110 c10,20 40,30 80,35 L278,630 Z" },
    { id: 'NT', name: 'Northern Territory', d: "M282,206 L410,206 c15,-21 40,-41 70,-46 c30,-5 60,10 75,30 c15,20 20,50 15,80 L570,450 L282,450 Z" },
    { id: 'SA', name: 'South Australia', d: "M282,454 L570,454 L570,580 c-10,30 -30,60 -60,80 c-30,20 -70,35 -120,35 c-50,0 -85,-15 -108,-45 L282,650 Z" },
    { id: 'QLD', name: 'Queensland', d: "M574,206 L600,180 c20,-40 35,-90 45,-130 c10,30 35,80 65,130 c30,50 70,120 100,200 c20,60 30,110 25,150 L574,530 Z" },
    { id: 'NSW', name: 'New South Wales', d: "M574,534 L835,534 c-5,46 -20,96 -55,146 c-30,40 -70,60 -120,65 L574,745 Z" },
    { id: 'VIC', name: 'Victoria', d: "M574,749 L660,749 c-20,31 -50,61 -100,76 c-50,10 -100,0 -130,-25 L574,749 Z" },
    { id: 'TAS', name: 'Tasmania', d: "M580,870 c30,0 65,10 75,35 c-5,35 -65,50 -105,40 c-30,-15 -35,-50 -5,-70 c10,-5 25,-5 35,-5 Z" }
  ];

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen selection:bg-[#FF8C1A] selection:text-black font-inter antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[91vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769622364/australia_opb2jk.avif" className="w-full h-full object-cover  scale-105" alt="Australia" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#FF8C1A] font-semibold tracking-[0.5em] uppercase text-[10px] mb-6 block">2026 Academic Intake</span>
            <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] mb-8 tracking-tight">Australia <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-white/80">Bound.</span></h1>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => document.getElementById('map-section').scrollIntoView({behavior: 'smooth'})} className="bg-[#FF8C1A] text-black font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-orange-500/10">Explore The Map</button>
              <button onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'})} className="bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Consultation</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTERACTIVE MAP SECTION */}
      <section id="map-section" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-[#FF8C1A] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Regional Analytics</h2>
            <h3 className="text-4xl font-medium mb-6 tracking-tight">Select Your <span className="text-[#FF8C1A]">Region</span></h3>
            <p className="text-black mb-10 leading-relaxed text-sm font-normal">Australia’s states offer specialized economic hubs. Filter by region to view institutional strengths and industry-aligned placement rates.</p>
            <div className="flex flex-wrap gap-2">
              {['All', 'NSW', 'VIC', 'QLD', 'WA', 'SA', 'ACT', 'TAS'].map((state) => (
                <button 
                  key={state}
                  onClick={() => handleStateClick(state)}
                  className={`px-5 py-2 rounded-lg border transition-all duration-300 font-bold text-[10px] tracking-widest ${filter === state ? 'bg-[#FF8C1A] border-[#FF8C1A] text-black' : 'border-white/30 text-black hover:border-white/20'}`}
                >
                  {state}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative group p-8 bg-white/[0.01] rounded-[3rem] border border-white/5 backdrop-blur-3xl shadow-2xl">
            <svg viewBox="0 0 1000 1000" className="relative w-full h-auto z-10 opacity-90">
              {statePaths.map((state) => (
                <motion.path
                  key={state.id}
                  d={state.d}
                  fill={filter === state.id ? "#FF8C1A" : "#141414"}
                  stroke={filter === state.id ? "#fff" : "rgba(255,255,255,0.05)"}
                  strokeWidth="1"
                  className="cursor-pointer transition-colors duration-500"
                  whileHover={{ fill: "#FF8C1A", opacity: 1 }}
                  onClick={() => handleStateClick(state.id)}
                />
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* 3. UNIVERSITY SWIPER */}
      <section id="uni-section" className="py-24 bg-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[#FF8C1A] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Focus: {filter}</h2>
              <h3 className="text-4xl font-medium tracking-tight">Academic <span className="text-orange-400">Excellence</span></h3>
            </div>
            <div className="flex gap-3">
              <button className="swiper-prev-btn w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#FF8C1A] hover:text-black transition-all text-sm"><FaArrowLeft /></button>
              <button className="swiper-next-btn w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#FF8C1A] hover:text-black transition-all text-sm"><FaArrowRight /></button>
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
                    <div className="bg-[#111] rounded-[2rem] select-none overflow-hidden border border-white/5 group transition-all duration-500 h-[520px] flex flex-col">
                      <div className="relative h-60 overflow-hidden shrink-0">
                        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        <div className="absolute top-5 left-5 bg-[#FF8C1A] text-black text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">{uni.rank}</div>
                      </div>
                      <div className="p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex justify-between items-center mb-4 text-[10px]">
                            <span className="flex items-center gap-2 text-gray-500 font-semibold tracking-wider"><FaMapMarkerAlt className="text-[#FF8C1A]" /> {uni.location}</span>
                            <span className="text-[#FF8C1A] font-bold tracking-widest">{uni.placement} RATE</span>
                          </div>
                          <h4 className="text-xl font-medium mb-3 tracking-tight">{uni.name}</h4>
                        </div>
                        <Link to={`/university${uni.link}`}>
                        <button className="w-full py-4 rounded-xl border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#FF8C1A] hover:text-black transition-all">Intake Details</button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. VISA & FINANCIALS */}
      <section className="py-24 bg-white border-y border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[#FF8C1A] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Compliance 2026</h2>
            <h3 className="text-4xl font-medium mb-10 tracking-tight">Entry <span className="text-[#FF8C1A]">Requirements</span></h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <FaPassport />, title: "Subclass 500", desc: "Visa Fee: ~AUD 1,600" },
                { icon: <FaHome />, title: "Living Funds", desc: "AUD 29,710/yr" },
                { icon: <FaUniversity />, title: "Finance", desc: "12-Month Tuition proof" },
                { icon: <FaGraduationCap />, title: "Post-Study", desc: "Subclass 485 Eligible" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/10 rounded-2xl border border-black hover:border-white/10 transition-all">
                  <div className="text-[#FF8C1A] text-2xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-sm mb-1 tracking-tight">{item.title}</h4>
                  <p className="text-black text-xs font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-10 border-l-2  border-gray-700">
            <h3 className="text-2xl font-medium mb-10 tracking-tight">Application <span className="text-[#FF8C1A]">Timeline</span></h3>
            {[
              { time: "M1-M2", title: "Testing Phase", text: "Secure IELTS 6.5+ or equivalent PTE scores." },
              { time: "M3-M4", title: "Institutional Offer", text: "Submit academics for Letter of Offer." },
              { time: "M5", title: "Certification", text: "Deposit payment and health cover (OSHC)." },
              { time: "M6", title: "Visa Lodgment", text: "Digital application via ImmiAccount." }
            ].map((step, i) => (
              <div key={i} className="mb-10 relative">
                <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#FF8C1A]" />
                <span className="text-[#FF8C1A] font-bold text-[9px] uppercase tracking-widest mb-1 block">{step.time}</span>
                <h4 className="text-lg font-medium mb-1 tracking-tight">{step.title}</h4>
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
            <div className="lg:w-1/3 bg-[#FF8C1A] p-12 text-black flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-medium mb-6 tracking-tight leading-none">Global Support.</h3>
                <p className="text-sm font-medium opacity-70 leading-relaxed mb-10">Connect with an authorized specialist for a tailor-made academic roadmap.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-sm"><FaEnvelope /></div>
                    <span className="text-sm font-bold tracking-tight">harkaransingh08ktl@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-sm"><FaPhoneAlt /></div>
                    <span className="text-sm font-bold tracking-tight">+91 9416384630</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 pt-12">
                <FaInstagram className="opacity-50 hover:opacity-100 cursor-pointer" />
                <FaLinkedin className="opacity-50 hover:opacity-100 cursor-pointer" />
              </div>
            </div>

            <div className="lg:w-2/3 p-12 lg:p-20 bg-gradient-to-br from-[#141414] to-[#0a0a0a]">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                  <input type="text" placeholder="Aayush" className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#FF8C1A] outline-none transition-all placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Email</label>
                  <input type="email" placeholder="aayush@gmail.com" className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#FF8C1A] outline-none transition-all placeholder:text-white/30" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Discipline</label>
                  <select className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#FF8C1A] outline-none text-gray-500 appearance-none">
                    <option>Choose specialization...</option>
                    <option>STEM & AI</option>
                    <option>Health Sciences</option>
                    <option>Law & Governance</option>
                  </select>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full py-5 bg-[#FF8C1A] text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:shadow-xl hover:shadow-orange-500/5 transition-all">Submit Inquiry</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#0a0a0a] text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold mb-4">© 2026 Study Australia Bound</p>
          <div className="flex justify-center gap-6 text-[9px] font-bold text-gray-700 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Visa Policy</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .swiper-pagination-bullet { background: #222 !important; opacity: 1 !important; width: 6px; height: 6px; }
        .swiper-pagination-bullet-active { background: #FF8C1A !important; width: 24px; border-radius: 3px; }
        select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.2)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1.25rem center; background-size: 1rem; }
      `}</style>
    </main>
  );
}