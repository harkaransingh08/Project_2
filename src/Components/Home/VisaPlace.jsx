import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function VisaPlace() {
  
    const destinations = [
    {
      id: 1,
      country: "Australia",
      image: "https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769622364/australia_opb2jk.avif",
      desc: "Home to world-class universities and a relaxed lifestyle. Get up to 4 years post-study work rights.",
      link: "/study-visa/australia"
    },
    {
      id: 2,
      country: "Canada",
      image: "https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769624192/canada_yhymmh.jpg",
      desc: "Top choice for students seeking PR. Affordable education and high living standards await you.",
      link: "/study-visa/canada"
    },
    {
      id: 3,
      country: "United Kingdom",
      image: "https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769622612/uk_wr1j8j.avif",
      desc: "Study in the land of prestigious heritage. Offers 2-year Graduate Route visa after masters.",
      link: "/study-visa/uk"
    },
    {
      id: 4,
      country: "USA",
      image: "https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769622732/usa_wzc3ku.jpg",
      desc: "The hub of innovation and technology. Experience flexible curriculum and OPT opportunities.",
      link: "/study-visa/usa"
    },
    {
      id: 5,
      country: "Singapore",
      image: "https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769624810/singapore_egb4kr.jpg",
      desc: "A global financial hub offering high-quality education and proximity to home.",
      link: "/study-visa/singapore"
    },
    {
      id: 6,
      country: "Europe",
      image: "https://res.cloudinary.com/dtkcgvpdw/image/upload/v1769622950/e2_a6scmr.avif",
      desc: "Explore Germany, France, and more. Low tuition fees and Schengen visa travel benefits.",
      link: "/study-visa/europe"
    },
  ];

  return (
    <section className="py-24  relative overflow-hidden" id="destinations">
      {/* Decorative background light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8C1A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#FF8C1A] font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            World-Class Opportunities
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-black underline tracking-tighter">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C1A] to-orange-500 italic">Destination</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg leading-relaxed">
            We provide expert guidance for the top study destinations. Select your dream country to begin your journey.
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((place) => (
            <motion.div 
              key={place.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#161616] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#FF8C1A]/30 transition-all duration-500 shadow-2xl"
            >
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={`${place.country} Study Visa`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-[#FF8C1A] text-white text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-2 tracking-widest uppercase shadow-lg">
                  <FaMapMarkerAlt /> {place.country}
                </div>
              </div>

              {/* Content */}
              <div className="p-10 pt-4">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF8C1A] transition-colors">
                  Study in {place.country}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-2">
                  {place.desc}
                </p>

                {/* Read More Link (using React Router Link) */}
                <Link 
                  to={place.link} 
                  className="flex items-center justify-between w-full py-4 px-6 border border-white/10 rounded-2xl group/link hover:bg-[#FF8C1A] transition-all duration-300"
                >
                  <span className="text-white text-xs font-black uppercase tracking-widest group-hover/link:text-white">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FF8C1A]/20 flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                    <FaArrowRight size={12} className="text-[#FF8C1A] group-hover:text-white" />
                  </div>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}