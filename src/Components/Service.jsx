import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, GraduationCap, Briefcase, Landmark, Clock } from 'lucide-react';

const services = [
  {
    title: "Student Visas",
    description: "Full assistance with university applications and student permit processing for top global destinations.",
    icon: <GraduationCap className="w-10 h-10 text-[#FF8C1A]" />,
  },
  {
    title: "Work Permits",
    description: "Navigating employer-sponsored visas and skilled worker permits to help you build your career abroad.",
    icon: <Briefcase className="w-10 h-10 text-[#FF8C1A]" />,
  },
  {
    title: "Tourist & Visitor Visas",
    description: "Fast-track processing for leisure travel, family visits, and short-term business trips.",
    icon: <Plane className="w-10 h-10 text-[#FF8C1A]" />,
  },
  {
    title: "PR & Immigration",
    description: "Expert guidance on Permanent Residency pathways, Express Entry, and points-based systems.",
    icon: <Landmark className="w-10 h-10 text-[#FF8C1A]" />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Service() {
  return (
    <main className="bg-white text-white min-h-screen cursor-pointer selection:bg-[#FF8C1A] selection:text-black font-inter antialiased">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 px-6 overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-left"
          >
            <span className="text-[#FF8C1A] hover:scale-110 transition-all duration-300 font-semibold ml-5 tracking-[0.5em] uppercase text-[10px] mb-6 block">
              Global Expertise
            </span>
            <h1 className="text-5xl md:text-8xl font-medium font-serif leading-[0.9] mb-8 text-black tracking-tight">
              Your Gateway <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black  /80 font-medium font-serif">Boundless.</span>
            </h1>
            <p className="max-w-md text-gray-400 text-sm md:text-base mb-10 leading-relaxed font-normal">
              Simplifying the complex world of immigration. We handle the technical paperwork while you prepare for your life-changing transition abroad.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="bg-[#FF8C1A] text-black font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-orange-500/10">
                Book Consultation
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE: Pull-up, Grayscale to Color, Scale with SMOOTH RETURN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] 
            }}
            whileHover={{ 
              y: -30, 
              scale: 1.05,
            }}
            // This transition block ensures the "glide" back is smooth (exit animation)
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              y: { 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                // Only use the floating duration when NOT hovering
                repeatType: "mirror" 
              },
              // Explicitly defining the hover-return behavior
              default: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }}
            className="relative flex justify-center items-center cursor-pointer group"
          >
            <div className="absolute w-[80%] h-[80%] bg-orange-600/10 blur-[100px] rounded-full group-hover:bg-orange-600/70 transition-all duration-700"></div>
            <img 
              src="https://res.cloudinary.com/dxrsaxq1d/image/upload/v1770742510/WhatsApp_Image_2026-01-24_at_21.45.27_fix6h4.png" 
              alt="Visa Mentor" 
              className="relative z-10 w-full max-w-[500px] h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-[#FF8C1A] font-bold uppercase tracking-[0.3em] text-[15px] mb-4">Strategic Paths</h2>
            <h3 className="text-4xl font-medium text-black tracking-tight">Immigration <span className="text-[#FF8C1A]">Solutions</span></h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#111] p-10 rounded-[2rem] border border-white/5 hover:border-[#FF8C1A]/30 transition-all group"
              >
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-medium mb-4 tracking-tight text-gray-100 group-hover:text-[#FF8C1A] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 bg-white border-y border-white/5">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-[#FF8C1A] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Certified Excellence</h2>
            <h3 className="text-4xl font-medium mb-10 text-black tracking-tight leading-none">Why Choose <br/>Our Mentorship?</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Success Rate", desc: "98% Case Approval" },
                { title: "Processing", desc: "Priority Timelines" },
                { title: "Licensing", desc: "MARA Registered" },
                { title: "Support", desc: "24/7 Global Desk" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-black rounded-2xl border border-white/5">
                  <ShieldCheck className="text-[#FF8C1A] w-6 h-6" />
                  <div>
                    <h5 className="text-sm font-bold tracking-tight">{item.title}</h5>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-[#111] to-black p-12 rounded-[3rem] border border-white/5 text-center">
            <div className="flex justify-center gap-12 mb-8">
               <div>
                  <h4 className="text-5xl font-medium text-[#FF8C1A]">12+</h4>
                  <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em] mt-2">Years</p>
               </div>
               <div>
                  <h4 className="text-5xl font-medium text-white">5K+</h4>
                  <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em] mt-2">Success</p>
               </div>
            </div>
            <p className="italic text-gray-400 text-sm font-normal border-l border-orange-500 pl-6 text-left py-2">
              "The most transparent process I've experienced. Every document was handled with precision."
            </p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
    </main>
  );
}