import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const successStories = [
  {
    id: 'rqWu5muH7r8',
    title: 'Singapore Study Visa Success',
    subtitle: 'Mr. Amandeep Singh • 15 Day Process',
    description: 'Mr Amandeep Singh got his Singapore visa in 15 days through Migration Planet.',
    thumbnail: 'https://i.ytimg.com/vi/uKd_h2rDj1I/hqdefault.jpg'
  },
  {
    id: 'W4Rp95Go09w',
    title: 'Singapore Visa Success | Mr. Gagandeep Singh',
    subtitle: 'Visa Received • Migration Planet',
    description: 'Congratulations to Mr. Gagandeep Singh for receiving his Singapore visa. Another successful milestone for Migration Planet.',
    thumbnail: 'https://i.ytimg.com/vi/W4Rp95Go09w/hqdefault.jpg'
  },
  {
    id: 'DAafhs3Ev5M',
    title: 'USA F1 Study Visa Success',    subtitle: 'Mr. Parasdeep Singh • USA Education',
    description: 'Mr. Parasdeep Singh from Sirsa shares his journey of securing a USA F1 Visa with the guidance of Migration Planet experts.',
    thumbnail: 'https://i.ytimg.com/vi/DAafhs3Ev5M/hqdefault.jpg'
  },
  {
    id: 'yPTLn2jGLzw',
    title: 'Europe Visa Approval',
    subtitle: 'Schengen Area • First Attempt',
    description: 'Got Europe visa on first attempt with Migration Planet.',
    thumbnail: 'https://i.ytimg.com/vi/anSf9rLHFXs/hqdefault.jpg'
  },
  {
    id: 'KJeYNvDTAc8',
    title: 'Singapore Visa Success Story',
    subtitle: 'Vinod Kumar • Client Experience',
    description: 'Vinod Kumar shares his experience with Migration Planet.',
    thumbnail: 'https://i.ytimg.com/vi/7tcYTdHYcvw/hqdefault.jpg'
  }
];

export default function SuccessStoriesPage() {
  const [selectedVideo, setSelectedVideo] = useState(successStories[0]);
  // isAutoplay is false initially so the first video doesn't blast sound on load
  const [isAutoplay, setIsAutoplay] = useState(false);

  const handleVideoChange = (video) => {
    setSelectedVideo(video);
    // Once a user clicks any video, we enable autoplay for that and all future selections
    setIsAutoplay(true);
  };

  return (
    <div className="min-h-screen  text-white px-6 py-24">
      <div className="container mx-auto max-w-7xl">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-[#FF8C1A] text-xs tracking-[0.5em] font-bold uppercase mb-4">
            Real Results
          </h2>
          <h1 className="text-5xl md:text-6xl text-black underline cursor-pointer hover:scale-105 transition-all duration-300 font-black uppercase">
            OUR SUCCESS <span className="text-[#FF8C1A]">STORIES</span>
          </h1>
        </motion.div>

        {/* Dashboard Container */}
        <div className="bg-black/60 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[520px]">
            
            {/* LEFT SECTION: Main Video Player */}
            <div className="lg:w-[60%] p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10 shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={selectedVideo.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                    // Dynamic autoplay parameter based on user interaction state
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=${isAutoplay ? 1 : 0}&rel=0&modestbranding=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></motion.iframe>
                </AnimatePresence>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-bold line-clamp-1 italic text-white">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-2 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </div>

            {/* RIGHT SECTION: Playlist */}
            <div className="lg:w-[40%] flex flex-col bg-white/[0.02]">
              <div className="p-5 border-b border-white/10 flex justify-between items-center">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8C1A]">Success Playlist</h4>
                <span className="text-[10px] text-gray-100 font-mono">{successStories.length} VIDEOS</span>
              </div>

              <div className="overflow-y-auto flex-1 custom-scrollbar">
                {successStories.map((video) => {
                  const isPlaying = selectedVideo.id === video.id;
                  return (
                    <div
                      key={video.id}
                      onClick={() => handleVideoChange(video)}
                      className={`flex items-center gap-4 p-4 cursor-pointer transition-all border-b border-white/5 group
                        ${isPlaying ? 'bg-[#FF8C1A]/10' : 'hover:bg-white/5'}`}
                    >
                      {/* Thumbnail with Overlay */}
                      <div className="relative w-28 aspect-video rounded-lg overflow-hidden shrink-0 border border-white/10">
                        <img 
                          src={video.thumbnail} 
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isPlaying ? 'opacity-30' : 'opacity-80'}`} 
                          alt={video.title} 
                        />
                        
                        {isPlaying ? (
                          /* Animated Playing Bars */
                          <div className="absolute inset-0 flex items-center justify-center gap-1">
                            {[1, 2, 3].map((i) => (
                              <motion.div 
                                key={i} 
                                animate={{ height: [4, 12, 4] }} 
                                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }} 
                                className="w-[2px] bg-[#FF8C1A]" 
                              />
                            ))}
                          </div>
                        ) : (
                          /* Hover Play Icon */
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                             <div className="w-8 h-8 rounded-full bg-[#FF8C1A] flex items-center justify-center">
                                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                             </div>
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <h5 className={`text-xs font-bold leading-snug line-clamp-2 transition-colors ${isPlaying ? 'text-[#FF8C1A]' : 'text-gray-300 group-hover:text-white'}`}>
                          {video.title}
                        </h5>
                        <p className={`text-[9px] mt-1 font-bold uppercase tracking-tighter ${isPlaying ? 'text-[#FF8C1A]/70' : 'text-gray-500'}`}>
                          Verified Success
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF8C1A; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </div>
    
  );
}