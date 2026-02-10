import React, { useEffect } from 'react'; // Added React import for safety
import SwiperHome from './SwiperHome';
import AboutHome from './AboutHome';
import Migration from './Migaration'; // Double check if your file is named Migaration or Migration
import VisaPlace from './VisaPlace';
import SuccessStoriesPage from './SuccessStoriesPage';

export default function Home() {
  // Enhanced Scroll to Top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' is better for page changes than 'smooth'
    });
  }, []);

  return (
    <main>
      <SwiperHome />
      <AboutHome />
      <SuccessStoriesPage />
      <Migration />
      <VisaPlace />
    </main>
  );
}