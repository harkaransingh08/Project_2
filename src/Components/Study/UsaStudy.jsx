import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGraduationCap, FaPassport, FaHome, FaUniversity,
  FaArrowLeft, FaArrowRight, FaMapMarkerAlt,
  FaStar, FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaFlagUsa
} from 'react-icons/fa';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function UsaStudy() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { country } = useParams();
  const [filter, setFilter] = useState('All');

  const universities = [
    {
      name: "Harvard University",
      placement: "98%",
      image: "https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFydmFyZCUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D",
      location: "Cambridge, MA",
      rank: "Global #4",
      state: "MA"
    },
    {
      name: "Stanford University",
      placement: "97%",
      image: "https://wallpapercave.com/wp/wp2017236.jpg",
      location: "Stanford, CA",
      rank: "Global #3",
      state: "CA"
    },
    {
      name: "Massachusetts Institute of Technology (MIT)",
      placement: "99%",
      image: "https://media.gettyimages.com/id/1224257281/video/mit.jpg?s=640x640&k=20&c=WtvWOQcS44OFZF075X3kR4tLEjM9fPgI04o5OsGvvic=",
      location: "Cambridge, MA",
      rank: "Global #1",
      state: "MA"
    },
    {
      name: "University of California, Berkeley",
      placement: "92%",
      image: "https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg",
      location: "Berkeley, CA",
      rank: "Global #10",
      state: "CA"
    },
    {
      name: "Columbia University",
      placement: "95%",
      image: "https://images.pexels.com/photos/20858443/pexels-photo-20858443.jpeg?cs=srgb&dl=pexels-shanerich5-20858443.jpg&fm=jpg",
      location: "New York, NY",
      rank: "Global #23",
      state: "NY"
    },
    {
      name: "New York University (NYU)",
      placement: "94%",
      image: "https://images.pond5.com/new-york-university-college-nyu-footage-028277856_iconl.jpeg",
      location: "New York, NY",
      rank: "Global #38",
      state: "NY"
    },
    {
      name: "Princeton University",
      placement: "97%",
      image: "https://images.unsplash.com/photo-1623631484725-fef26b75b402?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbmNldG9uJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
      location: "Princeton, NJ",
      rank: "Global #6",
      state: "NJ"
    },
    {
      name: "Yale University",
      placement: "96%",
      image: "https://cdn.pixabay.com/photo/2016/08/18/23/04/yale-university-1604158_640.jpg",
      location: "New Haven, CT",
      rank: "Global #9",
      state: "CT"
    },
    {
      name: "University of Chicago",
      placement: "95%",
      image: "https://wallpapercave.com/wp/wp10007473.jpg",
      location: "Chicago, IL",
      rank: "Global #11",
      state: "IL"
    },
    {
      name: "California Institute of Technology (Caltech)",
      placement: "96%",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwciQ56jGEJ9rwv8bujZ20ekY9eUniWHniA&s",
      location: "Pasadena, CA",
      rank: "Global #7",
      state: "CA"
    }
  ];


  const filteredUnis = filter === 'All' ? universities : universities.filter(u => u.state === filter);

  const handleStateClick = (code) => {
    setFilter(code);
    document.getElementById('uni-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="bg-[#050A18] text-white min-h-screen selection:bg-[#BF0A30] selection:text-white font-inter antialiased">

      {/* 1. HERO SECTION */}
      <section className="relative h-[91vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769622732/usa_wzc3ku.jpg" className="w-full h-full object-cover scale-105" alt="USA" />
          <div className="absolute inset-0 bg-linear-to-t from-[#050A18] via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#BF0A30] font-semibold tracking-[0.5em] uppercase text-[10px] mb-6 block flex items-center gap-2">
              <FaFlagUsa className="text-xs" /> The American Dream 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] mb-8 tracking-tight">America <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-[#BF0A30] to-blue-400">Calls.</span></h1>
            <div className="flex flex-wrap gap-5">
              <button onClick={() => document.getElementById('uni-section').scrollIntoView({ behavior: 'smooth' })} className="bg-[#BF0A30] text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-red-500/10">Explore Ivy Leagues</button>
              <button onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })} className="bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Visa Consulting</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATE FILTERS */}
      <section className="py-12 bg-white border-b  border-black/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'MA', 'CA', 'NY', 'TX', 'WA'].map((state) => (
              <button
                key={state}
                onClick={() => handleStateClick(state)}
                className={`px-8 py-2 rounded-full border transition-all bg-black duration-500 font-bold text-[10px] tracking-widest ${filter === state ? 'bg-black text-white border-white' : 'border-white/10 text-white hover:border-white/30'}`}
              >
                {state === 'All' ? 'ALL STATES' : state}
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
              <h2 className="text-[#BF0A30] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Top Tier USA</h2>
              <h3 className="text-4xl font-medium text-black tracking-tight">Academic <span className="text-[#BF0A30]">Excellence</span></h3>
            </div>
            <div className="flex gap-3">
              <button className="swiper-prev-btn w-12 h-12 rounded-full border border-white/5 flex text-blue-600 items-center justify-center hover:bg-[#BF0A30] hover:text-white transition-all text-sm"><FaArrowLeft /></button>
              <button className="swiper-next-btn w-12 h-12 rounded-full border border-white/5 flex items-center text-blue-600 justify-center hover:bg-[#BF0A30] hover:text-white transition-all text-sm"><FaArrowRight /></button>
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
                    <div className="bg-[#0A1128] rounded-[2rem] select-none overflow-hidden border border-white/5 group transition-all duration-500 h-[500px] flex flex-col">
                      <div className="relative h-56 overflow-hidden shrink-0">
                        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                        <div className="absolute top-5 left-5 bg-[#BF0A30] text-white text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">{uni.rank}</div>
                      </div>
                      <div className="p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex justify-between items-center mb-4 text-[10px]">
                            <span className="flex items-center gap-2 text-gray-500 font-semibold tracking-wider"><FaMapMarkerAlt className="text-[#BF0A30]" /> {uni.location}</span>
                            <span className="text-white/40 font-bold tracking-widest">{uni.placement} OPT SUCCESS</span>
                          </div>
                          <h4 className="text-xl font-medium mb-3 tracking-tight">{uni.name}</h4>
                        </div>
                        <button className="w-full py-4 rounded-xl border border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">University Details</button>
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
      <section className="py-24 bg-white   border-y border-black">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[#BF0A30] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Federal Regulations</h2>
            <h3 className="text-4xl font-medium mb-10 text-black tracking-tight">Student <span className="text-[#BF0A30]">F-1 Visa</span></h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <FaPassport />, title: "I-20 Form", desc: "Certificate of Eligibility from University" },
                { icon: <FaStar />, title: "SEVIS Fee", desc: "Mandatory I-901 federal registration" },
                { icon: <FaUniversity />, title: "STEM OPT", desc: "3-year work rights for technical majors" },
                { icon: <FaGraduationCap />, title: "H1-B Pathway", desc: "Specialty occupation sponsorship hubs" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-blue-600/20 rounded-2xl border border-white/5 hover:border-red-500/20 transition-all">
                  <div className="text-[#BF0A30] text-2xl mb-4">{item.icon}</div>
                  <h4 className="font-semibold text-sm text-black mb-1 tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 text-xs font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-10 border-l border-black">
            <h3 className="text-2xl font-medium mb-10 text-black tracking-tight">USA <span className="text-[#BF0A30]">Admissions</span></h3>
            {[
              { time: "Early Action", title: "November Deadline", text: "Higher acceptance rates. Non-binding applications." },
              { time: "Regular Decision", title: "January Start", text: "The primary window for Ivy League and top public state unis." },
              { time: "Rolling Basis", title: "Ongoing", text: "Universities accept apps until seats are filled." }
            ].map((step, i) => (
              <div key={i} className="mb-10 relative">
                <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full bg-[#050A18] border-2 border-[#BF0A30]" />
                <span className="text-[#BF0A30] font-bold text-[9px] uppercase tracking-widest mb-1 block">{step.time}</span>
                <h4 className="text-lg font-medium mb-1 tracking-tight">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xs font-normal">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#0A1128] rounded-[3rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-[#BF0A30] p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-medium mb-6 tracking-tight leading-none">Global <br />Admissions.</h3>
                <p className="text-sm font-medium opacity-70 leading-relaxed mb-10">Connect with specialists for GRE/GMAT waivers and visa interview prep.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm"><FaEnvelope /></div>
                    <span className="text-sm font-bold tracking-tight">harkaransingh08ktl@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-sm"><FaPhoneAlt /></div>
                                      <span className="text-sm font-bold tracking-tight">+91 9416384630</span>
                                    </div>
                </div>
              </div>
              <div className="flex gap-3 pt-12">
                <FaInstagram className="opacity-70 hover:opacity-100 cursor-pointer" />
                <FaLinkedin className="opacity-70 hover:opacity-100 cursor-pointer" />
              </div>
            </div>

            <div className="lg:w-2/3 p-12 lg:p-20 bg-[#060B1A]">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                  <input type="text" placeholder="Laxxy" className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#BF0A30] outline-none transition-all placeholder:text-white/30" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Email</label>
                  <input type="email" placeholder="laxxy@gmail.com" className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 text-sm focus:border-[#BF0A30] outline-none transition-all placeholder:text-white/30" />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-[#BF0A30] hover:text-white transition-all">Start My Journey</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#030712] text-center border-t border-white/5">
        <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-bold">© 2026 USA Scholar Portal</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #050A18; }
        .swiper-pagination-bullet { background: #1a1a1a !important; opacity: 1 !important; }
        .swiper-pagination-bullet-active { background: #BF0A30 !important; width: 24px; border-radius: 3px; }
      `}</style>
    </main>
  );
}