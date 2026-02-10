import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    id: 1,
    category: 'STUDY PERMIT',
    title: 'UNITED STATES',
    description: 'Secure your future with world-class education at top American universities.',
    image: 'https://rare-gallery.com/uploads/posts/786079-USA-Sky-New-York-City-Statue-of-Liberty.jpg',
    buttonText: 'Check Eligibility'
  },
  {
    id: 2,
    category: 'IMMIGRATION',
    title: 'UNITED KINGDOM',
    description: 'Expert guidance for your journey to live and work in the UK.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    buttonText: 'Learn More'
  },
  {
    id: 3,
    category: 'PERMANENT RESIDENCY',
    title: 'CANADA DREAMS',
    description: 'The fastest pathway to your Canadian Permanent Residency starts here.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    buttonText: 'Start Assessment'
  },
  {
    id: 4,
    category: 'GLOBAL OPPORTUNITIES',
    title: 'AUSTRALIA AWAIT',
    description: 'The fastest pathway to your Australian Permanent Residency starts here.',
    image: 'https://images5.alphacoders.com/555/thumb-1920-555090.jpg',
    buttonText: 'Start Assessment'
  },
  {
    id: 5,
    category: 'BEST DESTINATIONS',
    title: 'EUROPEAN HORIZONS',
    description: 'The Dream Path to Your European Adventure Begins Here.',
    image: 'https://images.wallpapersden.com/image/download/eiffel-tower-paris-france_ZmtrZW6UmZqaraWkpJRqaWxnrWhraW0.jpg',
    buttonText: 'Start Assessment'
  },
  {
    id: 6,
    category: 'BETTER LIVING',
    title: 'SINGAPORE SUCCESS',
    description: 'The fastest pathway to your Singapore Permanent Residency starts here.',
    image: 'https://images.pexels.com/photos/15480508/pexels-photo-15480508.jpeg?cs=srgb&dl=pexels-realcereal-15480508.jpg&fm=jpgg',
    buttonText: 'Start Assessment'
  },
  {
    id: 7,
    category: 'GLOBAL OPPORTUNITIES',
    title: 'GERMAN GATEWAY',
    description: 'The best path to your German Residency starts here.',
    image: 'https://images.unsplash.com/photo-1618259278412-2819cbdea4dc?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VybWFueXxlbnwwfHwwfHx8MA%3D%3D',
    buttonText: 'Start Assessment'
  },
];

export default function MigrationPlanetSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative group lg:pt-0 pt-5">
      <div className="relative h-full md:h-[100vh] w-full  overflow-hidden bg-black">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          speed={1200}
          loop={true}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="w-full h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              {/* Background with subtle zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[12000ms] ease-out ${
                    activeIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
              </div>
              
              {/* Content Area */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                  <div className="max-w-xl">
                    {/* Small Category Label */}
                    <div className={`overflow-hidden mb-3`}>
                      <p className={`text-[#FF8C1A] text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase transition-all duration-1000 delay-100 ${
                        activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}>
                        {slide.category}
                      </p>
                    </div>
                    
                    {/* Main Title - Reduced size, high tracking */}
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight transition-all duration-1000 delay-300 ${
                      activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                      {slide.title}
                    </h1>
                    
                    {/* Small Description Text */}
                    <p className={`text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-md transition-all duration-1000 delay-500 ${
                      activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                      {slide.description}
                    </p>
                    
                    {/* Buttons - Compact & Elegant */}
                    <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${
                      activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                      <button className="px-7 py-3 bg-[#FF8C1A] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-orange-500/10">
                        {slide.buttonText}
                      </button>
                      <button className="px-7 py-3 border border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-white/10 transition-all duration-300">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Minimalist Navigation */}
        <div className="absolute bottom-10 right-10 z-30 flex items-center gap-2">
          <button className="hero-prev w-10 h-10 border border-white/20 text-white hover:bg-[#FF8C1A] hover:border-[#FF8C1A] flex items-center justify-center transition-all duration-300 rounded-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="hero-next w-10 h-10 border border-white/20 text-white hover:bg-[#FF8C1A] hover:border-[#FF8C1A] flex items-center justify-center transition-all duration-300 rounded-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Slim Progress bar instead of bulky dots */}
        <div className="absolute bottom-0 left-0 w-full h-1 z-30 flex">
          {heroSlides.map((_, i) => (
            <div key={i} className="flex-1 bg-white/10 overflow-hidden">
               <div className={`h-full bg-[#FF8C1A] transition-all duration-[7000ms] linear ${
                  activeIndex === i ? 'w-full opacity-100' : 'w-0 opacity-0 transition-none'
               }`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}   