import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGraduationCap, FaPassport, FaEuroSign, FaUniversity, 
  FaArrowLeft, FaArrowRight, FaMapMarkerAlt, 
  FaGlobeEurope, FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaClock, FaShieldAlt 
} from 'react-icons/fa';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function EuropeStudy() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  const { country } = useParams();
  const [filter, setFilter] = useState('All');

  const universities = [
  {
    name: "ETH Zurich",
    placement: "97%",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRa3a3LfbTxQRqVuAKWg4wh4J0wXOzcvP4yg&s",
    location: "Zurich, CH",
    rank: "Global #7",
    region: "Central"
  },
  {
    name: "École Polytechnique Fédérale de Lausanne (EPFL)",
    placement: "96%",
    image: "https://mnsocietylive.files.wordpress.com/2018/11/epfl-3-2018-02-27-09-47-08.jpg?w=320&h=240",
    location: "Lausanne, CH",
    rank: "Global #26",
    region: "Central"
  },
  {
    name: "Technical University of Munich",
    placement: "95%",
    image: "https://www.timeshighereducation.com/cms-academic/sites/default/files/migrated_institution_images/header_image_31.jpg",
    location: "Munich, GER",
    rank: "Global #28",
    region: "Western"
  },
  {
    name: "University of Oxford",
    placement: "98%",
    image: "https://images.unsplash.com/photo-1612563958093-2c3bcfbd8760?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3hmb3JkJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    location: "Oxford, UK",
    rank: "Global #3",
    region: "Western"
  },
  {
    name: "University of Cambridge",
    placement: "97%",
    image: "https://c0.wallpaperflare.com/preview/416/179/610/kings-college-cambridge-uk-university.jpg",
    location: "Cambridge, UK",
    rank: "Global #5",
    region: "Western"
  },
  {
    name: "Imperial College London",
    placement: "96%",
    image: "https://wallpapercave.com/wp/wp12957260.jpg",
    location: "London, UK",
    rank: "Global #2",
    region: "Western"
  },
  {
    name: "University of Amsterdam",
    placement: "93%",
    image: "https://images.pexels.com/videos/19329332/pexels-photo-19329332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    location: "Amsterdam, NL",
    rank: "Global #55",
    region: "Western"
  },
  {
    name: "University of Paris-Saclay",
    placement: "89%",
    image: "https://www.eugloh.eu/fileadmin/_processed_/8/2/csm_Universite-Paris-Saclay_3e373fbcc8.jpg",
    location: "Paris, FRA",
    rank: "Global #13",
    region: "Western"
  },
  {
    name: "Heidelberg University",
    placement: "90%",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMx2OWsW3yf2Ap9nj1rv7k3VtxcolqzW4Ybg&s",
    location: "Heidelberg, GER",
    rank: "Global #47",
    region: "Western"
  },
  {
    name: "KTH Royal Institute of Technology",
    placement: "91%",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqR8-6KXsAvygUP0UiZBVMQ6_x4bzWEd7sA&s",
    location: "Stockholm, SWE",
    rank: "Global #73",
    region: "Northern"
  }
];


  const filteredUnis = filter === 'All' ? universities : universities.filter(u => u.region === filter);

  return (
    <main className="bg-[#0A0A0B] text-white min-h-screen selection:bg-[#FFCC00] selection:text-black font-inter antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[91vh] flex items-center overflow-hidden border-b-8 border-[#FFCC00]">
        <div className="absolute inset-0 z-0">
          <img src="https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769622950/e2_a6scmr.avif" className="w-full h-full object-cover opacity-70 scale-105" alt="European Architecture" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003399]/40 via-transparent to-[#0A0A0B]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <FaGlobeEurope className="text-[#FFCC00] text-xl" />
              <span className="text-white font-black tracking-[0.5em] uppercase text-[10px] block">Schengen Area • 2026 Season</span>
            </div>

             <h1 className="text-5xl md:text-8xl font-medium leading-[0.9] mb-8 tracking-tight">Legacy <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-white/70">Europe.</span></h1>
            
            <p className="max-w-md text-white/70 text-sm md:text-base mb-10 leading-relaxed font-normal border-l-4 border-[#003399] pl-6">
              Access the borderless academic frontier. From tuition-free public universities in Germany to elite Grandes Écoles in France.
            </p>

            <div className="flex flex-wrap gap-5">
              <button onClick={() => document.getElementById('uni-section').scrollIntoView({behavior: 'smooth'})} className="bg-[#003399] text-white font-black px-10 py-4 rounded-sm text-xs uppercase tracking-widest hover:bg-[#FFCC00] hover:text-[#003399] transition-all">Select Region</button>
              <button onClick={() => document.getElementById('contact-section').scrollIntoView({behavior: 'smooth'})} className="bg-white text-[#003399] font-black px-10 py-4 rounded-sm text-xs uppercase tracking-widest hover:bg-[#003399] hover:text-white transition-all">Visa Guide</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. REGION FILTERS */}
      <section className="py-12 bg-white border-b border-white/5">
        <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {['All', 'Western', 'Central', 'Northern'].map((reg) => (
                <button 
                  key={reg}
                  onClick={() => setFilter(reg)}
                  className={`px-10 py-3 rounded-sm border-2 transition-all bg-black duration-300 font-black text-[10px] tracking-[0.2em] ${filter === reg ? 'bg-[#FFCC00] border-[#FFCC00] text-blue-300' : 'border-white/10 text-white/40 hover:border-white'}`}
                >
                  {reg === 'All' ? 'ALL EUROPE' : `${reg.toUpperCase()} HUBS`}
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
              <h2 className="text-[#003399] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Academic Excellence</h2>
              <h3 className="text-5xl font-black tracking-tighter text-black uppercase italic">Schengen <span className="text-[#FFCC00]">Elite</span></h3>
            </div>
            <div className="flex gap-4">
              <button className="swiper-prev-btn w-14 h-14 rounded-full border-2 border-white/10 flex bg-blue-800 items-center justify-center hover:bg-[#FFCC00] hover:text-[#003399] transition-all"><FaArrowLeft /></button>
              <button className="swiper-next-btn w-14 h-14 rounded-full border-2 border-white/10 flex items-center  bg-blue-800 justify-center hover:bg-[#FFCC00] hover:text-[#003399] transition-all"><FaArrowRight /></button>
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
                    <div className="bg-black select-none rounded-3xl overflow-hidden border-2 border-white/5 group h-[540px] flex flex-col hover:border-[#FFCC00]/30 transition-all">
                      <div className="relative h-64 overflow-hidden shrink-0">
                        <img src={uni.image} alt={uni.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        <div className="absolute top-6 left-6 bg-[#003399] text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest">{uni.rank}</div>
                      </div>
                      <div className="p-10 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="flex justify-between items-center mb-6 text-[10px]">
                            <span className="flex items-center gap-2 text-white/40 font-black tracking-widest uppercase"><FaMapMarkerAlt className="text-[#FFCC00]" /> {uni.location}</span>
                            <span className="text-[#FFCC00] font-black tracking-widest">{uni.placement} JOB SUCCESS</span>
                          </div>
                          <h4 className="text-2xl font-black mb-3 uppercase tracking-tighter italic leading-none">{uni.name}</h4>
                        </div>
                        <button className="w-full py-5 rounded-sm bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Explore Curriculum</button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. VISA & SCHENGEN PATHWAYS */}
      <section className="py-24 bg-white border-y-4 border-[#FFCC00]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[#003399] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Legal Framework</h2>
            <h3 className="text-5xl font-black mb-12 text-black tracking-tighter uppercase italic">The Type <span className="text-[#FFCC00]">D Visa</span></h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <FaPassport />, title: "Schengen Mobility", desc: "Study in one, travel across 29 European countries." },
                { icon: <FaShieldAlt />, title: "EU Blue Card", desc: "Highly skilled worker pathway after graduation." },
                { icon: <FaEuroSign />, title: "Blocked Account", desc: "Required proof of funds (approx €11,208/year)." },
                { icon: <FaClock />, title: "Post-Study Job Seek", desc: "18 months stay-back in Germany, 12 in France." },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-black rounded-sm border-l-4 border-[#003399] hover:bg-gray-800 transition-all">
                  <div className="text-[#FFCC00] text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-black text-xs mb-2 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-white/50 text-[11px] font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative pl-12 border-l border-black">
            <h3 className="text-3xl font-black mb-12 tracking-tighter uppercase text-black italic">Application <span className="text-[#003399]">Roadmap</span></h3>
            {[
              { time: "Pre-Enrollment", title: "Uni-Assist & APS", text: "Verification of documents for German and Austrian portals." },
              { time: "Visa Interview", title: "VFS Global Hub", text: "Biometric and credibility interview at national consulates." },
              { time: "Residence Permit", title: "Ausländerbehörde", text: "Final registration in your destination city upon arrival." }
            ].map((step, i) => (
              <div key={i} className="mb-12 relative">
                <div className="absolute -left-[58px] top-1 w-5 h-5 rounded-full bg-[#FFCC00] border-4 border-[#0A0A0B]" />
                <span className="text-[#003399] font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{step.time}</span>
                <h4 className="text-xl font-black text-black mb-2 uppercase tracking-tight">{step.title}</h4>
                <p className="text-black   text-[11px] leading-relaxed max-w-xs font-normal">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact-section" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white/[0.03] rounded-[2rem] overflow-hidden border-2 border-white/5 flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-[#003399] p-16 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-5xl font-black mb-8 tracking-tighter leading-[0.9] uppercase italic">Expert <br/>Consult.</h3>
                <p className="text-xs font-bold opacity-80 leading-relaxed mb-12 uppercase tracking-widest">Specialized advisors for APS Germany and French Études en France procedures.</p>
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
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Applicant Name</label>
                  <input type="text" placeholder="Karan" className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-sm focus:border-[#00247D] outline-none transition-all  placeholder:text-white/30 font-black" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Email </label>
                  <input type="email" placeholder="karan@gmail.com" className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-sm focus:border-[#00247D] outline-none transition-all  placeholder:text-white/30 font-black" />                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-700">Preferred Country</label>
                  <input type="text" placeholder="France,Germany,Spain,Austria,Belgium" className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-sm focus:border-[#00247D] outline-none transition-all placeholder:text-white/30 font-black" />
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
        <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase font-black italic">© 2026 European Academic Gateway • EU Blue & Gold</p>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #0A0A0B; color: white; }
        .swiper-pagination-bullet { background: #fff !important; opacity: 0.1 !important; }
        .swiper-pagination-bullet-active { background: #FFCC00 !important; opacity: 1 !important; width: 40px !important; border-radius: 2px !important; }
      `}</style>
    </main>
  );
}