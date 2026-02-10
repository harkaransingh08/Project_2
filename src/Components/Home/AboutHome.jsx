import React from 'react';
import { FaCheckCircle, FaUserGraduate, FaGlobeAmericas, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = ["Certified Consultants", "98% Visa Success Rate", "Honest Advice", "Post-Landing Support"];
const stats = [
  { icon: <FaUserGraduate />, count: "5000+", label: "Happy Students" },
  { icon: <FaGlobeAmericas />, count: "15+", label: "Countries" },
  { icon: <FaAward />, count: "12+", label: "Experience" },
];

export default function AboutHome() {
  return (
    <section className="py-16  overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        {/* items-stretch ensures both columns have the same height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-5 md:gap-0 items-stretch">
          
          {/* Left Side: Image (~35%) */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-xl group min-h-[350px] lg:min-h-full"
          >
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjF5YWhpaXNjcXF6dWlsbjNsMjZlemdheDhlb3YzZXc0OXJ6a2p5dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DhJ8gLXgq60HOGg0lr/giphy.gif"
              alt="Student consulting"
              className="absolute inset-0 w-full md:h-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right Side: Content (~65%) */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6 bg-black/40 hover:bg-black/60 transition duration-700 backdrop-blur-md rounded-2xl p-8 md:p-12 flex flex-col justify-center shadow-2xl border border-white/5 h-full"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#FF8C1A]/10 text-[#FF8C1A] px-4 py-1 rounded-full text-xs font-bold uppercase w-fit tracking-[0.2em] border border-[#FF8C1A]/20"
            >
              About Us
            </motion.span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-700 leading-tight">
              Your Gateway to <br />
              <span className="text-[#FF8C1A] italic underline decoration-orange">Global Education</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
              Expert guidance from university selection to visa approval. We simplify the complexity of international migration by providing personalized roadmaps for every student.
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-4 pt-2">
              {features.map((f, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-3 font-medium text-gray-700 hover:text-white transition-colors"
                >
                  <FaCheckCircle className="text-[#FF8C1A] flex-shrink-0" /> {f}
                </motion.li>
              ))}
            </ul>

            <div className="flex justify-between border-t border-black/10 pt-8 mt-6">
              {stats.map((s, i) => (
                <div key={i} className="text-center sm:text-left group">
                  <div className="text-[#FF8C1A] text-3xl mb-2 group-hover:scale-110 transition-transform flex justify-center sm:justify-start">
                    {s.icon}
                  </div>
                  <h4 className="text-2xl md:text-3xl text-gray-700 font-black">{s.count}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}