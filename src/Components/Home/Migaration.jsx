import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaHandshake, FaPassport, FaHeadset, FaSearchDollar, FaClock } from 'react-icons/fa';

export default function Migration() {
  
  const reasons = [
    {
      id: 1,
      title: "Certified Experts",
      description: "Our team consists of certified immigration lawyers and counselors with years of experience handling complex cases.",
      icon: <FaUserTie />,
    },
    {
      id: 2,
      title: "98% Success Rate",
      description: "We analyze every profile deeply to ensure the highest chances of approval. Our track record speaks for itself.",
      icon: <FaPassport />,
    },
    {
      id: 3,
      title: "100% Transparency",
      description: "No hidden charges or false promises. We maintain complete transparency regarding fees from day one.",
      icon: <FaSearchDollar />,
    },
    {
      id: 4,
      title: "End-to-End Support",
      description: "From university selection and SOP writing to interview preparation and post-landing assistance.",
      icon: <FaHandshake />,
    },
    {
      id: 5,
      title: "Fast Processing",
      description: "We value your time. Our streamlined process ensures your application is submitted without unnecessary delays.",
      icon: <FaClock />,
    },
    {
      id: 6,
      title: "24/7 Student Support",
      description: "Have a doubt? Our support team is always available to answer your queries regarding your application status.",
      icon: <FaHeadset />,
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card appearing
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-24  overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- Section Heading --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl cursor-pointer mx-auto mb-20 bg-black/60 hover:bg-black/80 transition duration-300 backdrop-blur-md rounded-2xl p-10 border border-white/10 shadow-2xl"
        >
          <h2 className="text-[#FF8C1A] font-bold hover:text-gray-300 hover:bg-black/80 transition duration-300 tracking-[0.4em] uppercase text-xs mb-4">
            Why Choose Migration Planet?
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            We Make Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C1A] to-orange-300">Dream Journey</span> Simple
          </h3>
          <div className="w-20 h-1 bg-[#FF8C1A] mx-auto mt-6 rounded-full" />
          <p className="text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Choosing the right consultant is the first step towards your dream destination. 
            Here is why thousands of students trust us with their future.
          </p>
        </motion.div>

        {/* --- Cards Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((item) => (
            <motion.div 
              key={item.id} 
              variants={cardVariants}
              whileHover={{ scale: 1.03, translateY: -5 }}
              className="group relative bg-[#111]/50 p-10 rounded-2xl border border-white/5 hover:bg-black/80  hover:border-[#FF8C1A]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FF8C1A]/5 blur-3xl rounded-full group-hover:bg-[#FF8C1A]/10 transition-all duration-500" />
              
              {/* Icon Container */}
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-[#FF8C1A] text-2xl mb-8 group-hover:bg-[#FF8C1A] group-hover:text-white transition-all duration-500 shadow-lg">
                {item.icon}
              </div>
              
              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#FF8C1A] transition-colors tracking-tight">
                {item.title}
              </h4>
              <p className="text-black text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[2px] border-r-[2px] border-[#FF8C1A] opacity-0 group-hover:w-8 group-hover:h-8 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}