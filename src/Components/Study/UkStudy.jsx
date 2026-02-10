import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGraduationCap, FaPassport, FaCrown, FaUniversity,
  FaArrowLeft, FaArrowRight, FaMapMarkerAlt,
  FaGlobeAmericas, FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaClock, FaCheckCircle
} from 'react-icons/fa';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function UKStudy() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { country } = useParams();
  const [filter, setFilter] = useState('All');

  const universities = [
    {
      name: "University of Oxford",
      placement: "98%",
      image: "https://i.pinimg.com/736x/c1/5f/9c/c15f9c3e9186af9e38fb7c5fa55d1c94.jpg",
      location: "Oxford, ENG",
      rank: "Global #3",
      group: "Russell"
    },
    {
      name: "University of Cambridge",
      placement: "97%",
      image: "https://c0.wallpaperflare.com/preview/416/179/610/kings-college-cambridge-uk-university.jpg",
      location: "Cambridge, ENG",
      rank: "Global #5",
      group: "Russell"
    },
    {
      name: "Imperial College London",
      placement: "96%",
      image: "https://images.pond5.com/imperial-college-london-kensington-footage-151223546_iconl.jpeg",
      location: "London, ENG",
      rank: "Global #2",
      group: "Russell"
    },
    {
      name: "University College London (UCL)",
      placement: "95%",
      image: "https://wallpapercave.com/wp/wp10055694.jpg",
      location: "London, ENG",
      rank: "Global #9",
      group: "Russell"
    },
    {
      name: "London School of Economics (LSE)",
      placement: "94%",
      image: "https://www.shutterstock.com/image-photo/london-may-2019-entrance-school-260nw-1404263582.jpg",
      location: "London, ENG",
      rank: "Global #45",
      group: "Russell"
    },
    {
      name: "University of Edinburgh",
      placement: "92%",
      image: "https://images.pexels.com/photos/18391675/pexels-photo-18391675.jpeg?cs=srgb&dl=pexels-harry-shum-17627821-18391675.jpg&fm=jpg",
      location: "Edinburgh, SCT",
      rank: "Global #27",
      group: "Russell"
    },
    {
      name: "University of Manchester",
      placement: "91%",
      image: "https://images.pexels.com/photos/11210304/pexels-photo-11210304.jpeg?cs=srgb&dl=pexels-szymon-shields-1503561-11210304.jpg&fm=jpg",
      location: "Manchester, ENG",
      rank: "Global #32",
      group: "Russell"
    },
    {
      name: "King’s College London",
      placement: "93%",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      location: "London, ENG",
      rank: "Global #40",
      group: "Russell"
    },
    {
      name: "University of Bristol",
      placement: "90%",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80",
      location: "Bristol, ENG",
      rank: "Global #55",
      group: "Russell"
    }
  ];


  const filteredUnis = filter === 'All' ? universities : universities.filter(u => u.group === filter);

  return (
    <main className="bg-[#0A0A0B] text-white min-h-screen selection:bg-[#CF142B] selection:text-white font-inter antialiased">

      {/* 1. HERO SECTION */}
      <section className="relative h-[91vh] flex items-center overflow-hidden border-b-8 border-[#00247D]">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769622612/uk_wr1j8j.avif" className="w-full h-full object-cover opacity-70 scale-105" alt="London UK" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#CF142B]/30 via-transparent to-[#0A0A0B]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <FaCrown className="text-[#CF142B] text-xl" />
              <span className="text-white font-black tracking-[0.5em] uppercase text-[10px] block">The United Kingdom • 2026</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] mb-8 tracking-tight">Royal <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white/70">Legacy.</span></h1>

            <p className="max-w-md text-white/70 text-sm md:text-base mb-10 leading-relaxed font-normal border-l-4 border-[#00247D] pl-6">
              Home to the world's oldest academic traditions. Secure your future in the UK with the 2-year Graduate Route work visa.
            </p>

            <div className="flex flex-wrap gap-5">
              <button onClick={() => document.getElementById('uni-section').scrollIntoView({ behavior: 'smooth' })} className="bg-[#CF142B] text-white font-black px-10 py-4 rounded-sm text-xs uppercase tracking-widest hover:bg-white hover:text-[#CF142B] transition-all">Russell Group</button>
              <button onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })} className="bg-[#00247D] text-white font-black px-10 py-4 rounded-sm text-xs uppercase tracking-widest hover:bg-white hover:text-[#00247D] transition-all">Start CAS Process</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. GROUP FILTERS */}
      <section className="py-12 bg-white border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Russell', 'Modern'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-10 py-3 rounded-sm border-2 transition-all bg-black duration-300 font-black text-[10px] tracking-[0.2em] ${filter === type ? 'bg-[#00247D] border-[#00247D] text-white' : 'border-white/10 text-white/40 hover:border-white'}`}
              >
                {type === 'All' ? 'ALL UNIVERSITIES' : `${type.toUpperCase()} GROUP`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. UNIVERSITY SWIPER */}
      <section id="uni-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[#CF142B] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Elite Education</h2>
              <h3 className="text-5xl font-black text-black tracking-tighter uppercase italic">Oxford <span className="text-[#00247D]">Standards</span></h3>
            </div>
            <div className="flex gap-4">
              <button className="swiper-prev-btn w-14 h-14 rounded-full border-2 border-white/10 flex text-black  items-center justify-center hover:bg-[#CF142B] transition-all"><FaArrowLeft /></button>
              <button className="swiper-next-btn w-14 h-14 rounded-full border-2 border-white/10 flex items-center text-black justify-center hover:bg-[#CF142B] transition-all"><FaArrowRight /></button>
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
                className="pb-24"
              >
                {filteredUnis.map((uni, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-black rounded-3xl overflow-hidden select-none border-2 border-white/5 group h-[540px] flex flex-col hover:border-[#00247D]/30 transition-all">
                      <div className="relative h-64 overflow-hidden shrink-0">
                        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        <div className="absolute top-6 left-6 bg-[#CF142B] text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">{uni.rank}</div>
                      </div>
                      <div className="p-10 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex justify-between items-center mb-6 text-[10px]">
                            <span className="flex items-center gap-2 text-white/40 font-black tracking-widest uppercase"><FaMapMarkerAlt className="text-[#CF142B]" /> {uni.location}</span>
                            <span className="text-[#00247D] font-black tracking-widest">{uni.placement} SUCCESS</span>
                          </div>
                          <h4 className="text-2xl font-black mb-3 uppercase tracking-tighter italic leading-none">{uni.name}</h4>
                        </div>
                        <button className="w-full py-5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#00247D] hover:text-white transition-all">Course Prospectus</button>
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
      <section className="py-24 bg-white border-y-4 border-[#00247D]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[#CF142B] font-black uppercase tracking-[0.4em] text-[10px] mb-4">UKVI Compliance</h2>
            <h3 className="text-5xl font-black mb-12 tracking-tighter text-black uppercase italic">Student <span className="text-[#CF142B]">Visa</span></h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <FaPassport />, title: "CAS Letter", desc: "Confirmation of Acceptance for Studies is mandatory." },
                { icon: <FaCheckCircle />, title: "Graduate Route", desc: "Post-Study Work Permit (PSW) for 2 years." },
                { icon: <FaClock />, title: "Part-time Work", desc: "Legal work rights for 20 hours/week during term." },
                { icon: <FaUniversity />, title: "IHS Surcharge", desc: "Access to the National Health Service (NHS)." },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-black rounded-sm border-l-4 border-[#00247D] hover:bg-gray-500 transition-all">
                  <div className="text-[#CF142B] text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-black text-xs mb-2 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-white/50 text-[11px] font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-12 border-l border-black">
            <h3 className="text-3xl font-black mb-12 tracking-tighter text-black uppercase italic">Admission <span className="text-[#00247D]">Cycle</span></h3>
            {[
              { time: "September", title: "Autumn Intake", text: "Primary window for all Masters and UG programs." },
              { time: "January", title: "Winter Intake", text: "Secondary intake for Business and Law degrees." },
              { time: "Deadlines", title: "UCAS & Direct", text: "Jan 2026 for most UG programs via UCAS portal." }
            ].map((step, i) => (
              <div key={i} className="mb-12 relative">
                <div className="absolute -left-[58px] top-1 w-5 h-5 rounded-full bg-[#00247D] border-4 border-[#0A0A0B]" />
                <span className="text-[#CF142B] font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{step.time}</span>
                <h4 className="text-xl text-black mb-2 uppercase tracking-tight">{step.title}</h4>
                <p className="text-black text-[11px] leading-relaxed max-w-xs font-normal">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white/[0.03] rounded-[2rem] overflow-hidden border-2 border-white/5 flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-[#00247D] p-16 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-5xl font-black mb-8 tracking-tighter leading-[0.9] uppercase italic">UK Portal <br />Services.</h3>
                <p className="text-xs font-bold opacity-80 leading-relaxed mb-12 uppercase tracking-widest">Expert guidance on Russell Group applications and Credibility Interviews.</p>
                <div className="space-y-6">
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
              </div>
              <div className="flex gap-4 pt-16">
                <FaInstagram className="text-xl opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
                <FaLinkedin className="text-xl opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>

            <div className="lg:w-2/3 p-16 lg:p-24 bg-[#0A0A0B]">
              <form className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CF142B]">Applicant Name</label>
                  <input type="text" placeholder="Ravi Singh  " className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-sm focus:border-[#00247D] outline-none transition-all  placeholder:text-white/30 font-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CF142B]">Email </label>
                  <input type="email" placeholder="ravisingh@gmail.com" className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-sm focus:border-[#00247D] outline-none transition-all  placeholder:text-white/30 font-black" />                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CF142B]">Preferred City</label>
                  <input type="text" placeholder="LONDON / OXFORD" className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-sm focus:border-[#00247D] outline-none transition-all placeholder:text-white/30 font-black" />
                </div>
                <div className="md:col-span-2 pt-6">
                  <button className="w-full py-6 bg-white text-[#00247D] font-black uppercase tracking-[0.4em] text-[11px] rounded-sm hover:bg-[#CF142B] hover:text-white transition-all shadow-2xl">Lodge Application</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#0A0A0B] text-center border-t border-white/10">
        <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-black italic">© 2026 United Kingdom Education Hub</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #0A0A0B; color: white; }
        .swiper-pagination-bullet { background: #fff !important; opacity: 0.1 !important; }
        .swiper-pagination-bullet-active { background: #CF142B !important; opacity: 1 !important; width: 40px !important; border-radius: 2px !important; }
      `}</style>
    </main>
  );
}